import { motion } from "motion/react"
import { itemVariants } from "@/types/variants"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

type FeatureCardProps = {
  title: string
  description: string
  image: string
}

const FeatureCardMotion = motion.create(Card)

const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  return (
    <FeatureCardMotion
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="group relative mx-auto h-56 w-full max-w-sm overflow-hidden rounded-2xl border-0 pt-0 shadow-lg md:h-72"
    >
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 z-10 h-full w-full object-cover brightness-75"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <div className="absolute inset-0 z-20 bg-linear-to-b from-black/10 via-black/35 to-black" />
      <CardContent className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 text-left md:p-6">
        <CardHeader className="space-y-2 p-0 text-wrap">
          <CardTitle className="z-20 bg-linear-to-b from-white via-zinc-600 to-black bg-clip-text text-3xl leading-tight font-medium tracking-tight text-white/60">
            {title}
          </CardTitle>
          <CardDescription className="z-20 line-clamp-3 text-base leading-tight font-medium tracking-tight text-white/55">
            {description}
          </CardDescription>
        </CardHeader>
      </CardContent>
    </FeatureCardMotion>
  )
}

export default FeatureCard
