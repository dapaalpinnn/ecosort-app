import { cn } from "@/lib/utils"
import { motion, type MotionProps } from "motion/react"
import type { ComponentProps } from "react"
import { itemVariants } from "@/types/variants"

type SectionTitleProps = ComponentProps<"h2"> &
  MotionProps & {
    as?: "h1" | "h2"
    color?: "primary" | "secondary"
    withAnimation?: boolean
  }

const colorVariants = {
  primary: "text-primary",
  secondary: "text-background",
}

const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
}

const SectionTitle = ({
  as = "h2",
  color = "primary",
  children,
  className,
  withAnimation = false,
  ...props
}: SectionTitleProps) => {
  const Tag = motionTags[as]

  return (
    <Tag
      className={cn(
        "w-[80%] text-3xl font-medium tracking-tighter sm:text-4xl lg:text-5xl",
        colorVariants[color],
        className
      )}
      variants={withAnimation ? itemVariants : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default SectionTitle
