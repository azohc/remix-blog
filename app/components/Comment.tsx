import { useLocation } from "@remix-run/react"
import { useState } from "react"
import { useColors } from "~/root"
import { formatDateTime } from "~/utils/formatting"
import { join } from "~/utils/styling"
import CommentForm from "./CommentForm"

interface CommentProps {
  comment: {
    id: string
    author?: string | null | undefined
    content: string
    createdAt?: string | undefined
    parent?:
      | {
          id: string
        }
      | null
      | undefined
  }
}

export default function Comment({ comment }: CommentProps) {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const location = useLocation()
  const { colors } = useColors()
  const parentId = comment.parent?.id
  const parentToHighlight = location.hash.substring(1)

  return (
    <div
      id={comment.id}
      className={join([
        "rounded border-2 p-2 max-w-2xl w-fit flex flex-col",
        parentToHighlight === comment.id ? "ring-blue ring-2" : "",
      ])}
    >
      <section className="flex gap-4 justify-between flex-wrap gap-y-0.5 sm:flex-nowrap items-baseline">
        <span className="flex gap-2 items-baseline">
          <span className="font-semibold">
            {comment.author || "Anonymous"}
          </span>
          <span className="opacity-70 text-sm font-light">
            {comment.id}
          </span>
        </span>
        {comment.createdAt && (
          <span className="text-sm font-medium">
            {formatDateTime(comment.createdAt)}
          </span>
        )}
      </section>
      <p className="py-3">
        {parentId && (
          <span className="pr-2">
            <a href={`#${parentId}`}>&gt;&gt;{parentId}</a>
          </span>
        )}
        {comment.content}
      </p>
      <button
        onClick={() => setShowReplyForm(!showReplyForm)}
        className={join([
          "place-self-end rounded-md px-1 py-0.5 hover:bg-lightGray active:bg-gray transition hover:text-white",
          colors.bg,
          colors.text,
          showReplyForm ? "mb-4" : "",
        ])}
      >
        {showReplyForm ? "Discard" : "Reply"}
      </button>
      {showReplyForm && <CommentForm parentCommentId={comment.id} />}
    </div>
  )
}
