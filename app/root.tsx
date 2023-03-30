import type { LinksFunction, MetaFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { createContext, useContext, useState } from "react"
import styles from "./tailwind.css"
import { ColorContextValue, C_COLORS, join } from "./utils/styling"
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

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={join([colors.background, colors.text])}>
        <ColorContext.Provider
          value={{
            colors,
            flipColors: () => {
              setColors((prev) =>
                prev === C_COLORS ? A_COLORS : C_COLORS
              )
            },
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
