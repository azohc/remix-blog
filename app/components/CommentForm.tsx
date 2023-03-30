import { Form } from "@remix-run/react"

const border = "rounded border-2 border-lightBlueGray"
const input =
  "outline-none focus:ring-1 ring-blueGray focus:border-blueGray px-2 hover:border-gray transition"

interface CommentFormProps {
  parentCommentId?: string
}
export default function CommentForm({
  parentCommentId,
}: CommentFormProps) {
  return (
    <Form
      method={parentCommentId ? "patch" : "post"}
      className={"p-2 grid grid-cols-[1fr_3fr] gap-y-2 gap-x-4 max-w-lg ".concat(
        border
      )}
    >
      <label htmlFor="author" className="opacity-50">
        Name
      </label>
      <input
        type="text"
        id="author"
        name="author"
        className={[input, border].join(" ")}
      />
      <label htmlFor="comment" className="opacity-50">
        Comment
      </label>
      <textarea
        id="comment"
        name="comment"
        required
        className={[input, border].join(" ")}
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
        className="place-self-end
      rounded-md px-1 py-0.5 bg-blueGray hover:bg-lightGray active:bg-gray hover:text-jet text-white transition"
      >
        Submit
      </button>
    </Form>
  )
}
