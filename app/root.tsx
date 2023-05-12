import type { LinksFunction, MetaFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react"
import { createContext, useContext, useState } from "react"
import Plank from "./components/Plank"
import styles from "./tailwind.css"
import type { ColorContextValue } from "./utils/styling"
import { C_COLORS, join } from "./utils/styling"
import { A_COLORS } from "./utils/styling"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "juan's blog",
  viewport: "width=device-width,initial-scale=1",
})

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
]

const ColorContext = createContext<null | ColorContextValue>(null)

export function useColors() {
  const context = useContext(ColorContext)
  if (!context)
    throw new Error(
      "useColors can only be used within a ColorProvider ancestor"
    )
  return context
}

export default function App() {
  const [colors, setColors] = useState(A_COLORS)
  const [plankOnLeft, setPlankOnLeft] = useState(true)
  const location = useLocation()
  const atRoot = location.pathname === "/"

  const flipColors = () => {
    setColors((prev) => (prev === C_COLORS ? A_COLORS : C_COLORS))
  }

  const handlePlankClick = () => {
    setPlankOnLeft((prev) => !prev)
    flipColors()
  }

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className={join([
          "lg:max-w-4xl lg:mx-auto",
          colors.bg,
          colors.text,
        ])}
      >
        <header
          className={join([
            "transition self-start w-full px-8",
            atRoot ? "my-16" : "my-8",
          ])}
        >
          <div
            className={join([
              "flex",
              plankOnLeft ? "justify-start" : "justify-end",
            ])}
          >
            <Plank onClick={handlePlankClick} colors={colors} />
          </div>
        </header>
        <ColorContext.Provider
          value={{
            colors,
            flipColors,
          }}
        >
          <Outlet />
        </ColorContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
