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
  return (
    <span
      className={"py-0.5 px-1 rounded border-[1px] ".concat(
        sizeClass(size)
      )}
    >
      {tag}
    </span>
  )
}
