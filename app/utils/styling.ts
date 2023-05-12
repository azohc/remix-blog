export const join = (classNames: string[]) => classNames.join(" ")

export type ThemeColors = {
  bg: string
  text: string
  codeBg: string
  codeText: string
}

export interface ColorContextValue {
  colors: ThemeColors
  flipColors: () => void
}

export const A_COLORS: ThemeColors = {
  bg: "bg-slate-300",
  text: "text-blueGray",
  codeBg: "bg-blueGray",
  codeText: "text-slate-300",
}

export const C_COLORS: ThemeColors = {
  bg: "bg-emerald-100",
  text: "text-jet",
  codeBg: "bg-blueGray",
  codeText: "text-emerald-100",
}

export const border = "rounded border-2 border-lightBlueGray"

export const input =
  "outline-none focus:ring-1 ring-blueGray focus:border-blueGray px-2 hover:border-gray transition"
