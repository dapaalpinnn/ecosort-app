import secondLifeBetterLife from "@/assets/brand/second-life-better-life.png"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge/badge"
import { useState, useEffect } from "react"
import { AnimatePresence } from "motion/react"

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
    <div className="flex flex-col items-center justify-center gap-4 tracking-tight">
      <motion.img
        src={secondLifeBetterLife}
        alt="Second Life Better Life"
        className="w-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      <Badge className="border px-4 py-3 text-[12px]">
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
