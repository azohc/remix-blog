import { Link } from "@remix-run/react"
import type { GetPostsQuery } from "~/graphql/generated/graphql"
import { useColors } from "~/root"
import { join } from "~/utils/styling"
import Tag from "./Tag"

interface PostsCardListsProps {
  posts: GetPostsQuery["posts"]
}
export default function PostsCardList({
  posts,
}: PostsCardListsProps) {
  const { colors } = useColors()

  return (
    <ul className="flex flex-col gap-2 w-4/5 max-w-sm items-center mb-8">
      {posts.map((post) => (
        <Link
          to={`/${post.slug}`}
          prefetch="intent"
          className="rounded-md shadow-lg border-[1px] p-4 flex flex-col gap-2 justify-between hover:shadow-blueGray transition hover:no-underline"
          key={post.id}
        >
          <h3 className={join([colors.bg, colors.text])}>
            {post.title}
          </h3>
          <div className="flex gap-2 justify-between items-baseline text-jet">
            <span
              className={join(["opacity-70", colors.bg, colors.text])}
            >
              {post.comments.length} comment
              {post.comments.length !== 1 && "s"}
            </span>
            <div
              className={join(["flex gap-1", colors.text, colors.bg])}
            >
              {post.tags[0].split(",").map((tag, i) => (
                <Tag key={i} tag={tag} />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </ul>
  )
}
