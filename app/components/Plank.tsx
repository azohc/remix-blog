import { motion } from "framer-motion"
import { useState } from "react"

const transform =
  "transform transition duration-500 motion-reduce:transition-none"
export const join = (classNames: string[]) => classNames.join(" ")

interface PlankProps {
  onClick: () => void
}

export default function Plank({ onClick }: PlankProps) {
  const [shifted, setShifted] = useState(true)

  const handleClick = () => {
    setShifted((prev) => !prev)
    onClick()
  }
  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        duration: 0.77,
      }}
      className={join([
        "transition-[width] h-16 overflow-x-hidden relative cursor-pointer",
        shifted ? "w-24 bg-slate-100" : "w-32 bg-amber-50",
      ])}
      onClick={handleClick}
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
    </motion.div>
  )
}
