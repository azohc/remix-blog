import { Form } from "@remix-run/react"
import Comment from "./Comment"

interface PostViewProps {
  post: {
    id: string
    slug: string
    title: string
    content: string
    tags: Array<string>
    createdAt?: string
    updatedAt?: string
  }
  html: string
  comments: {
    id: string
    author?: string | null | undefined
    content: string
    createdAt?: string
    parent?:
      | {
          id: string
        }
      | null
      | undefined
  }[]
}
export const formatDateTime = (datestr: string) => {
  const date = new Date(datestr)
  const locale = "en-ES"
  return `${date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  })} at ${date.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
  })}`
}

export default function PostView({
  post,
  html,
  comments,
}: PostViewProps) {
  let showUpdatedAt = false
  let createdAt = ""
  let updatedAt = ""
  if (post && post.createdAt && post.updatedAt) {
    createdAt = post?.createdAt
    updatedAt = post?.updatedAt

    showUpdatedAt =
      formatDateTime(createdAt) !== formatDateTime(updatedAt)
  }

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {post?.title}
      </h1>
      <h2>
        <span>
          {post?.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </span>
        {createdAt && <span>{formatDateTime(createdAt)}</span>}
        {showUpdatedAt && (
          <span>
            <span>{formatDateTime(updatedAt)}</span>
          </span>
        )}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <section id="comments">
        <h2>comments</h2>
        <Form method="post">
          <label htmlFor="author">Name</label>
          <input type="text" id="author" name="author" />
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" name="comment" required />
          <button type="submit">Submit</button>
        </Form>
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </section>
    </main>
  )
}
