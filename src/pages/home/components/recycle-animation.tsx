import { motion } from "motion/react"
import recycleImage from "@/assets/brand/second-life-better-life.png"

const RecycleLogoAnimation = () => {
  return (
    <motion.img
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      src={recycleImage}
      alt="Recycle"
      className="w-10 sm:w-12 lg:w-16"
    />
  )
}

export default RecycleLogoAnimation
