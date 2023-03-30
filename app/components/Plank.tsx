import { useState } from "react"

const transform =
  "transform transition duration-500 motion-reduce:transition-none"
const join = (classNames: string[]) => classNames.join(" ")

export default function Plank() {
  const [shifted, setShifted] = useState(true)

  return (
    <div
      className={join([
        "transition-[width] h-16 overflow-x-hidden relative cursor-pointer",
        shifted ? "w-24" : "w-32",
      ])}
      onClick={() => setShifted(!shifted)}
    >
      <h1
        className={join([
          transform,
          "absolute text-red-900",
          shifted ? " translate-x-full" : " translate-x-0",
        ])}
        style={{ backfaceVisibility: "hidden" }}
      >
        chozas
      </h1>
      <h1
        className={join([
          transform,
          "absolute text-blue-900",
          shifted ? " translate-x-0" : " -translate-x-full",
        ])}
        style={{ backfaceVisibility: "hidden" }}
      >
        azohc
      </h1>
    </div>
  )
}
