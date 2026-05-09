import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { AnimatePresence } from "motion/react"
import recycleImage from "@/assets/brand/second-life-better-life.png"


const SecondLifeBetterLife2 = () => {
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
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        src={recycleImage}
        alt="Recycle"
        className="w-10 sm:w-12 lg:w-16"
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

export default SecondLifeBetterLife2;