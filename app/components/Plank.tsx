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
        shifted ? "w-24 bg-slate-100" : "w-32 bg-amber-50",
      ])}
      onClick={() => setShifted(!shifted)}
    >
      <h1
        className={join([
          transform,
          "absolute text-jet",
          shifted ? " translate-x-full" : " translate-x-0",
        ])}
        style={{ backfaceVisibility: "hidden" }}
      >
        chozas
      </h1>
      <h1
        className={join([
          transform,
          "absolute text-blueGray",
          shifted ? " translate-x-0" : " -translate-x-full",
        ])}
        style={{ backfaceVisibility: "hidden" }}
      >
        azohc
      </h1>
    </div>
  )
}
