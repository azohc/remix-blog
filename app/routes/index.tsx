import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { useState } from "react"
import Plank from "~/components/Plank"
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
  const { flipColors } = useColors()
  const [plankOnLeft, setPlankOnLeft] = useState(true)

  const handlePlankClick = () => {
    setPlankOnLeft((prev) => !prev)
    flipColors()
  }

  return (
    <main className="mx-auto mt-16 max-w-7xl flex flex-col items-center px-4">
      <header className="mb-16 self-start w-full px-4">
        <div
          className={join([
            "flex",
            plankOnLeft ? "justify-start" : "justify-end",
          ])}
        >
          <Plank onClick={handlePlankClick} />
        </div>
      </header>
      <h2 className="mb-16">
        lessons learnt on a journey into the world of{" "}
        <code>software development</code>
      </h2>
      <PostsCardList posts={posts} />
    </main>
  )
}
