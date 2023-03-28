import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { marked } from "marked"
import invariant from "tiny-invariant"
import PostView from "~/components/PostView"

import { getPost } from "~/models/post.server"

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, `params.slug is required`)

  const { post } = await getPost({ slug: params.slug })
  invariant(post, `Post not found: ${params.slug}`)

  const html = marked(post.content)
  return json({ post, html })
}

export default function PostSlug() {
  const { post, html } = useLoaderData<typeof loader>()
  return <PostView post={post} html={html} />
}
