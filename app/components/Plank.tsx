import { motion } from "framer-motion"
import { useState } from "react"
import { useColors } from "~/root"
import { join } from "~/utils/styling"

const transform =
  "transform transition duration-500 motion-reduce:transition-none"

interface PlankProps {
  onClick: () => void
}

export default function Plank({ onClick }: PlankProps) {
  const [shifted, setShifted] = useState(true)
  const { colors } = useColors()

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
        shifted ? "w-24 " : "w-32 bg-amber-50",
        colors.background,
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
