import { motion } from "motion/react"
import recycleImage from "@/assets/brand/second-life-better-life.png"
import { cn } from "@/lib/utils"

type RecycleLogoAnimationProps = {
  size?: "small" | "medium" | "large"
}

const RecycleLogoAnimation = ({
  size = "medium",
}: RecycleLogoAnimationProps) => {
  return (
    <motion.img
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      src={recycleImage}
      alt="Recycle"
      className={cn(
        size === "small" && "w-10",
        size === "medium" && "w-12",
        size === "large" && "w-16"
      )}
    />
  )
}

export default RecycleLogoAnimation
