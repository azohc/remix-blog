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
import { deletePost, getPost, updatePost } from "~/models/post.server"

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, "params.slug is required")
  const { post } = await getPost({ slug: params.slug })
  if (!post) {
    return redirect("/posts/admin")
  }
  return json(post)
}

const handlePutRequest = async (slug: string, request: Request) => {
  const formData = await request.formData()

  const newTitle = formData.get("newTitle")
  const newSlug = formData.get("newSlug")
  const newContent = formData.get("newContent")
  const newTags = formData.get("newTags")

  const errors = {
    title: newTitle ? null : "title is required",
    slug: newSlug ? null : "slug is required",
    content: newContent ? null : "content is required",
  }

  if (!newTitle || !newSlug || !newContent) {
    return json(errors)
  }

  invariant(typeof newTitle === "string", "title must be a string")
  invariant(typeof newSlug === "string", "slug must be a string")
  invariant(
    typeof newContent === "string",
    "content must be a string"
  )
  invariant(typeof newTags === "string", "tags must be a string")

  const updatedPost = await updatePost({
    slug,
    newSlug,
    newTitle,
    newContent,
    newTags: newTags.split(" "),
  })

  return redirect(`/posts/${updatedPost.slug}`)
}

const handleDeleteRequest = async (slug: string) => {
  console.log("deleting")
  await deletePost({ slug })

  return redirect("/posts")
}

export const action = async ({ params, request }: ActionArgs) => {
  invariant(params.slug, `params.slug is required`)
  switch (request.method) {
    case "PUT":
      return await handlePutRequest(params.slug, request)
    case "DELETE":
      return await handleDeleteRequest(params.slug)
    default:
      throw new Error("unsupported method")
  }
}

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`

export default function PostAdmin() {
  const navigation = useNavigation()
  const isUpdating = navigation.state === "submitting"
  const post = useLoaderData<typeof loader>()
  const errors = useActionData<typeof action>()

  return (
    <>
      <Form method="put">
        <p>
          <label htmlFor="newTitle">
            Post Title:{" "}
            {errors?.title ? (
              <em className="text-red-600">{errors.title}</em>
            ) : null}
            <input
              type="text"
              name="newTitle"
              defaultValue={post?.title}
              className={inputClassName}
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="newSlug">
            Post Slug:{" "}
            {errors?.slug ? (
              <em className="text-red-600">{errors.slug}</em>
            ) : null}
            <input
              type="text"
              name="newSlug"
              defaultValue={post?.slug}
              className={inputClassName}
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="newContent">
            Markdown:{" "}
            {errors?.content ? (
              <em className="text-red-600">{errors.content}</em>
            ) : null}
          </label>
          <br />
          <textarea
            id="newContent"
            rows={20}
            name="newContent"
            defaultValue={post?.content}
            className={`${inputClassName} font-mono`}
            required
          />
        </p>
        <label htmlFor="newTags">Tags:</label>
        <input
          type="text"
          id="newTags"
          name="newTags"
          defaultValue={post?.tags}
          className={inputClassName}
        />
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update"}
        </button>
      </Form>
      <Form method="delete">
        <button
          type="submit"
          className="rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600 focus:bg-red-400 disabled:bg-red-300"
        >
          Delete post
        </button>
      </Form>
    </>
  )
}
