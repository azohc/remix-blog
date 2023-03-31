import { Link } from "@remix-run/react"
import { useColors } from "~/root"
import { formatDateTime } from "~/utils/formatting"
import { join } from "~/utils/styling"
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

export default function PostView({
  post,
  html,
  comments,
}: PostViewProps) {
  const { colors } = useColors()
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
    <main
      className={join([
        "mx-auto max-w-4xl px-2",
        colors.bg,
        colors.text,
      ])}
    >
      <header className="flex items-start">
        <Link
          to="/"
          className={join([
            "basis-1/12 text-center",
            colors.bg,
            colors.text,
          ])}
          prefetch="intent"
        >
          &lt;
        </Link>
        <div className="flex flex-col gap-2">
          <span
            className={join(["opacity-70", colors.bg, colors.text])}
          >
            /{post.slug}
          </span>
          <h1
            className={join([
              "flex-1 text-5xl leading-tight",
              colors.bg,
              colors.text,
            ])}
          >
            {post?.title}
          </h1>
        </div>
      </header>
      <hr />
      <section id="details" className="flex justify-between mx-4">
        <div className="grid grid-cols-[1fr_3fr] text-sm gap-x-2 mt-1">
          <span
            className={join(["opacity-70", colors.bg, colors.text])}
          >
            Published
          </span>
          {createdAt && (
            <span
              className={join([
                "font-medium",
                colors.bg,
                colors.text,
              ])}
            >
              {formatDateTime(createdAt)}
            </span>
          )}

          {showUpdatedAt && (
            <>
              <span
                className={join([
                  "opacity-70",
                  colors.bg,
                  colors.text,
                ])}
              >
                Updated
              </span>
              <span
                className={join([
                  "font-medium",
                  colors.bg,
                  colors.text,
                ])}
              >
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
        className={join(["mx-2 my-6"])}
      />

      <hr />
      <section id="comments" className="mx-4">
        <h3>Comments</h3>
        <CommentForm />
        <div className="flex flex-col gap-2 py-4">
          {comments.map((comment, i) => (
            <Comment key={i} comment={comment} />
          ))}
        </div>
      </section>
    </main>
  )
}
