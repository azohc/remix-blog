import type { GetPostBySlugQuery } from "~/graphql/generated/graphql"

interface PostViewProps {
  post: GetPostBySlugQuery["post"]
  html: string
}
const formatDateTime = (datestr: string) => {
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
export default function PostView({ post, html }: PostViewProps) {
  let showUpdatedAt = false
  let publishedAt = ""
  let updatedAt = ""
  if (post && post.publishedAt && post.updatedAt) {
    publishedAt = post?.publishedAt as string
    updatedAt = post?.updatedAt as string

    showUpdatedAt =
      formatDateTime(publishedAt) !== formatDateTime(updatedAt)
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
        {publishedAt && <span>{formatDateTime(publishedAt)}</span>}
        {showUpdatedAt && (
          <span>
            <span>{formatDateTime(updatedAt)}</span>
          </span>
        )}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}
