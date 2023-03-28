import type { LoaderArgs, ActionArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { json } from "@remix-run/node"
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react"
import invariant from "tiny-invariant"
import { getPost, updatePost } from "~/models/post.server"

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, "params.slug is required")
  const { post } = await getPost({ slug: params.slug })
  return json(post)
}

export const action = async ({ params, request }: ActionArgs) => {
  // TODO handle delete post
  invariant(params.slug, "params.slug is required")
  const formData = await request.formData()

  const title = formData.get("title")
  const slug = formData.get("slug")
  const content = formData.get("content")

  const errors = {
    title: title ? null : "title is required",
    slug: slug ? null : "slug is required",
    content: content ? null : "content is required",
  }

  if (!title || !slug || !content) {
    return json(errors)
  }

  invariant(typeof title === "string", "title must be a string")
  invariant(typeof slug === "string", "slug must be a string")
  invariant(typeof content === "string", "content must be a string")

  await updatePost({
    slug: params.slug,
    newSlug: slug,
    newTitle: title,
    newContent: content,
    // TODO tags
    // newTags: tags
  })

  return redirect(`/posts/${slug}`)
}

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`

export default function PostAdmin() {
  const navigation = useNavigation()
  const isUpdating = navigation.state === "submitting"
  const post = useLoaderData<typeof loader>()
  const errors = useActionData<typeof action>()

  return (
    <Form method="post">
      <p>
        <label>
          Post Title:{" "}
          {errors?.title ? (
            <em className="text-red-600">{errors.title}</em>
          ) : null}
          <input
            type="text"
            name="title"
            defaultValue={post?.title}
            className={inputClassName}
            required
          />
        </label>
      </p>
      <p>
        <label>
          Post Slug:{" "}
          {errors?.slug ? (
            <em className="text-red-600">{errors.slug}</em>
          ) : null}
          <input
            type="text"
            name="slug"
            defaultValue={post?.slug}
            className={inputClassName}
            required
          />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">
          Markdown:{" "}
          {errors?.content ? (
            <em className="text-red-600">{errors.content}</em>
          ) : null}
        </label>
        <br />
        <textarea
          id="content"
          rows={20}
          name="content"
          defaultValue={post?.content}
          className={`${inputClassName} font-mono`}
          required
        />
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update"}
        </button>
      </p>
    </Form>
    // TODO
    // <Form method="delete">
    //   <button type="submit">Delete post</button>
    // </Form>
  )
}
