import { useColors } from "~/root"
import { join } from "~/utils/styling"

type SizeOptions = "sm" | "base"

interface TagProps {
  tag: string
  size?: SizeOptions
}

const sizeClass = (size?: SizeOptions) => {
  if (!size || size === "base") {
    return "text-base"
  }
  return "text-sm"
}

export default function Tag({ tag, size }: TagProps) {
  const { colors } = useColors()
  return (
    <span
      className={join([
        "py-0.5 px-1 rounded border-[1px]",
        sizeClass(size),
        colors.bg,
        colors.text,
      ])}
    >
      {tag}
    </span>
  )
}
