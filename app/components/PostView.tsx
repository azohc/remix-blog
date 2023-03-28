import type { GetPostBySlugQuery } from "~/graphql/generated/graphql"

interface PostViewProps {
  post: GetPostBySlugQuery["post"]
  html: string
}
export default function PostView({ post, html }: PostViewProps) {
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {post?.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}
