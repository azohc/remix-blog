import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import PostsCardList from "~/components/PostsCardList"
import { getPosts } from "~/models/post.server"

export const loader = async () => {
  const posts = await getPosts()
  return json(posts)
}

export default function Index() {
  const posts = useLoaderData<typeof loader>()

  return (
    <main className="mx-auto mt-16 max-w-7xl flex flex-col items-center px-4">
      <header className="mb-16 self-start">
        <h1>azohc.blog</h1>
        <em>TODO interactive name graphic</em>
      </header>
      <h2 className="mb-16">
        lessons learnt on a journey into the world of{" "}
        <code>software development</code>
      </h2>
      <PostsCardList posts={posts} />
    </main>
  )
}
