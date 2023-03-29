import type { ActionArgs, LoaderArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { marked } from "marked"
import invariant from "tiny-invariant"
import PostView from "~/components/PostView"

import {
  connectCommentToPost,
  createComment,
  createCommentReply,
  getPost,
  getPostComments,
} from "~/models/post.server"

export const loader = async ({ params }: LoaderArgs) => {
  const slug = params.slug
  invariant(slug, `params.slug is required`)

  const { post } = await getPost({ slug })
  invariant(post, `Post with slug "${slug} not found`)

  const comments = await getPostComments({ slug })

  const html = marked(post.content)
  return json({ post, html, comments })
}

async function handlePostRequest(slug: string, request: Request) {
  const formData = await request.formData()

  const author = formData.get("author")
  const comment = formData.get("comment")

  invariant(typeof author === "string", "author must be a string")
  invariant(typeof comment === "string", "comment must be a string")

  const { id } = await createComment({ content: comment, author })

  await connectCommentToPost({ slug, commentId: id })
}

async function handlePatchRequest(slug: string, request: Request) {
  const formData = await request.formData()

  const author = formData.get("author")
  const comment = formData.get("comment")
  const parentCommentId = formData.get("parent")?.toString()

  invariant(typeof author === "string", "author must be a string")
  invariant(typeof comment === "string", "comment must be a string")
  invariant(
    parentCommentId,
    "Comment component must pass the parent comment id in order to link the reply"
  )

  const { id } = await createCommentReply({
    content: comment,
    author,
    parentCommentId,
  })

  await connectCommentToPost({ slug, commentId: id })
}

export const action = async ({ params, request }: ActionArgs) => {
  const slug = params.slug
  invariant(slug, `params.slug is required`)

  switch (request.method) {
    case "POST":
      await handlePostRequest(slug, request)
      break
    case "PATCH":
      await handlePatchRequest(slug, request)
      break
  }

  return redirect("")
}
export default function PostSlug() {
  const { post, html, comments } = useLoaderData<typeof loader>()
  return <PostView post={post} html={html} comments={comments} />
}
