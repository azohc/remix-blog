import { Form } from "@remix-run/react"
import { useColors } from "~/root"
import { join } from "~/utils/styling"

const border = "rounded border-2 border-lightBlueGray"
const input =
  "outline-none focus:ring-1 ring-blueGray focus:border-blueGray px-2 hover:border-gray transition"

interface CommentFormProps {
  parentCommentId?: string
}
export default function CommentForm({
  parentCommentId,
}: CommentFormProps) {
  const { colors } = useColors()

  return (
    <Form
      method={parentCommentId ? "patch" : "post"}
      className={join([
        border,
        "p-2 grid grid-cols-[1fr_3fr] gap-y-2 gap-x-4 max-w-lg",
      ])}
    >
      <label
        htmlFor="author"
        className={join(["opacity-70", colors.text])}
      >
        Name
      </label>
      <input
        type="text"
        id="author"
        name="author"
        className={join([input, border, colors.bg, colors.text])}
      />
      <label
        htmlFor="comment"
        className={join(["opacity-70", colors.text])}
      >
        Comment
      </label>
      <textarea
        id="comment"
        name="comment"
        required
        className={join([input, border, colors.bg, colors.text])}
      />
      {parentCommentId && (
        <input
          type="text"
          name="parent"
          hidden
          defaultValue={parentCommentId}
        />
      )}
      <div />
      <button
        type="submit"
        className={join([
          "place-self-end rounded-md px-1 py-0.5 hover:bg-lightGray active:bg-gray transition hover:text-white",
          colors.bg,
          colors.text,
        ])}
      >
        Submit
      </button>
    </Form>
  )
}
