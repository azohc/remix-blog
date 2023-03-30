export const join = (classNames: string[]) => classNames.join(" ")

type ThemeColors = {
  background: string
  text: string
}

export interface ColorContextValue {
  colors: ThemeColors
  flipColors: () => void
}

export const A_COLORS: ThemeColors = {
  background: "bg-slate-100",
  text: "text-blueGray",
}
export const C_COLORS: ThemeColors = {
  background: "bg-amber-50",
  text: "text-jet",
}
