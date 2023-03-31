import { motion } from "framer-motion"
import { useState } from "react"
import type { ThemeColors } from "~/utils/styling"
import { join } from "~/utils/styling"

const transform =
  "transform transition duration-500 motion-reduce:transition-none"

interface PlankProps {
  onClick: () => void
  colors: ThemeColors
}

export default function Plank({ onClick, colors }: PlankProps) {
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
        shifted ? "w-28 " : "w-32 bg-amber-50",
        colors.bg,
      ])}
      onClick={handleClick}
    >
      <h1
        className={join([
          transform,
          "absolute text-jet",
          shifted ? " translate-x-full" : " translate-x-0",
          colors.text,
        ])}
        style={{ backfaceVisibility: "hidden" }}
      >
        chozas
      </h1>
      <h1
        className={join([
          colors.text,
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
