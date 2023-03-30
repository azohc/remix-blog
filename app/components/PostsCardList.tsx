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
        <li
          key={post.id}
          className="rounded-md shadow-md p-4 flex flex-col gap-2 justify-between"
        >
          <h3>{post.title}</h3>
          <div className="flex gap-2 justify-between items-baseline">
            <span className="opacity-50">
              {post.comments.length} comment
              {post.comments.length !== 1 && "s"}
            </span>
            <div className="flex gap-1">
              {post.tags.map((tag, i) => (
                <Tag key={i} tag={tag} />
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
