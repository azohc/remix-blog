import { Link } from "@remix-run/react"
import type { GetPostsQuery } from "~/graphql/generated/graphql"
import Tag from "./Tag"

interface PostsCardListsProps {
  posts: GetPostsQuery["posts"]
}
export default function PostsCardList({
  posts,
}: PostsCardListsProps) {
  return (
    <ul className="flex flex-col gap-2 w-4/5 max-w-sm items-center">
      {posts.map((post) => (
        <Link
          to={`posts/${post.slug}`}
          prefetch="intent"
          className="rounded-md shadow-md p-4 flex flex-col gap-2 justify-between hover:shadow-blueGray transition hover:no-underline"
          key={post.id}
        >
          <h3>{post.title}</h3>
          <div className="flex gap-2 justify-between items-baseline text-jet">
            <span className="opacity-70">
              {post.comments.length} comment
              {post.comments.length !== 1 && "s"}
            </span>
            <div className="flex gap-1">
              {post.tags.map((tag, i) => (
                <Tag key={i} tag={tag} />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </ul>
  )
}
