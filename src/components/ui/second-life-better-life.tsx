import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { AnimatePresence } from "motion/react"
import leavesImage from "@/assets/leaves.png"

const SecondLifeBetterLife = () => {
  const [word, setWord] = useState<"Second" | "Better">("Second")

  useEffect(() => {
    const interval = setInterval(
      () => setWord((word) => (word === "Second" ? "Better" : "Second")),
      4000
    )

    return () => clearInterval(interval)
  })

  return (
    <div className="flex flex-col items-center justify-center gap-2 tracking-tight">
      <motion.img
        src={leavesImage}
        alt="Leaves"
        className="inline-block w-10 origin-bottom-left align-middle"
        animate={{ rotate: [-10, 10, -10] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Badge className="border px-4 py-2 text-[12px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={word}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block w-16 text-center"
          >
            {word} life
          </motion.span>
        </AnimatePresence>
      </Badge>
    </div>
  )
}

export default SecondLifeBetterLife
