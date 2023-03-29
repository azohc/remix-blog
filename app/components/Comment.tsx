import { Form } from "@remix-run/react"
import { useState } from "react"
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
      {showReplyForm && (
        <Form method="patch">
          <label htmlFor="author">Name</label>
          <input type="text" id="author" name="author" />
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" name="comment" required />
          <input
            type="text"
            name="parent"
            hidden
            defaultValue={comment.id}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </div>
  )
}
