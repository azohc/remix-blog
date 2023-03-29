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

export const action = async ({ params, request }: ActionArgs) => {
  const slug = params.slug
  invariant(slug, `params.slug is required`)
  const formData = await request.formData()

  const author = formData.get("author")
  const comment = formData.get("comment")

  const errors = {
    comment: comment ? null : "comment can't be empty",
  }

  if (!comment) {
    return json(errors)
  }

  invariant(typeof author === "string", "author must be a string")
  invariant(typeof comment === "string", "comment must be a string")

  const { id } = await createComment({ content: comment, author })

  await connectCommentToPost({ slug, commentId: id })

  // TODO  SAVE REPLIES TO COMMENTS
  return redirect("")
}
export default function PostSlug() {
  const { post, html, comments } = useLoaderData<typeof loader>()
  return <PostView post={post} html={html} comments={comments} />
}
