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
  bg: "bg-slate-100",
  text: "text-blueGray",
  codeBg: "bg-blueGray",
  codeText: "text-slate-100",
}
export const C_COLORS: ThemeColors = {
  bg: "bg-amber-50",
  text: "text-jet",
  codeBg: "bg-blueGray",
  codeText: "bg-amber-50",
}
