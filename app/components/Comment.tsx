import { useState } from "react"
import CommentForm from "./CommentForm"
import { formatDateTime } from "./PostView"

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
  const parentId = comment.parent?.id

  return (
    <div id={comment.id}>
      <p>
        <span>{comment.author || "Anonymous"}</span>
        <span>{comment.id}</span>
        {comment.createdAt && (
          <span>on {formatDateTime(comment.createdAt)}</span>
        )}
      </p>
      <span>
        {parentId && <a href={`#${parentId}`}>&gt;&gt;{parentId}</a>}
      </span>
      <p>{comment.content}</p>
      <button onClick={() => setShowReplyForm(!showReplyForm)}>
        {showReplyForm ? "Discard" : "Reply"}
      </button>
      {showReplyForm && <CommentForm parentCommentId={comment.id} />}
    </div>
  )
}
