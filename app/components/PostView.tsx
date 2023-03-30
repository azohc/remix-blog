import { Form, Link } from "@remix-run/react"
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import Tag from "./Tag"

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
  })} @ ${date.toLocaleTimeString(locale, {
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
    <main className="mx-auto max-w-4xl px-2 py-4">
      <header className="flex items-start">
        <Link to="/" className="basis-1/12" prefetch="intent">
          &lt;
        </Link>
        <div className="flex flex-col gap-2">
          <span className="opacity-50">/{post.slug}</span>
          <h1 className="flex-1 text-5xl leading-tight">
            {post?.title}
          </h1>
        </div>
      </header>
      <hr />
      <section id="details" className="flex justify-between mx-4">
        <div className="grid grid-cols-[1fr_3fr] text-sm gap-x-2 mt-1">
          <span className="opacity-50">Published</span>
          {createdAt && <span>{formatDateTime(createdAt)}</span>}

          {showUpdatedAt && (
            <>
              <span className="opacity-50">Updated</span>
              <span>
                <span>{formatDateTime(updatedAt)}</span>
              </span>
            </>
          )}
        </div>

        <div className="flex flex-col gap-2 items-end">
          {post?.tags.map((tag, i) => (
            <Tag key={i} tag={tag} size="sm" />
          ))}
        </div>
      </section>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="mx-2 my-6"
      />

      <hr />
      <section id="comments">
        <h3>Comments</h3>
        <CommentForm />
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </section>
    </main>
  )
}
