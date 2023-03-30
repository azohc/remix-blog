import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import PostsCardList from "~/components/PostsCardList"
import { getPosts } from "~/models/post.server"
import { useColors } from "~/root"
import { join } from "~/utils/styling"

export const loader = async () => {
  const posts = await getPosts()
  return json(posts)
}

export default function Index() {
  const posts = useLoaderData<typeof loader>()
  const { colors } = useColors()

  return (
    <main className="mx-auto mt-16 max-w-7xl flex flex-col items-center px-4">
      <h2 className={join(["mb-16", colors.bg, colors.text])}>
        lessons learnt on a journey into the world of{" "}
        <code className={join([colors.codeBg, colors.codeText])}>
          software development
        </code>
      </h2>
      <PostsCardList posts={posts} />
    </main>
  )
}
