interface TagProps {
  tag: string
}

export default function Tag({ tag }: TagProps) {
  return (
    <span className="py-0.5 px-1 rounded border-[1px]">{tag}</span>
  )
}
