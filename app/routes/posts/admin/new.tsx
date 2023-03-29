import type { ActionArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { Form, useActionData, useNavigation } from "@remix-run/react"
import invariant from "tiny-invariant"
import { createPost } from "~/models/post.server"

export const action = async ({ request }: ActionArgs) => {
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

  await createPost({
    title,
    slug,
    content,
  })

  return redirect(`/posts/${slug}`)
}

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`

export default function NewPost() {
  const navigation = useNavigation()
  const isCreating = navigation.state === "submitting"

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
            className={inputClassName}
            required
          />
        </label>
      </p>
      <p>
        <label htmlFor="content">
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
          className={`${inputClassName} font-mono`}
          required
        />
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isCreating}
        >
          {isCreating ? "Creating..." : "Create Post"}
        </button>
      </p>
    </Form>
  )
}
