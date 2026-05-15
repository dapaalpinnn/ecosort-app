// components/layout/section/section.tsx
import { cn } from "@/lib/utils"
import { motion, type MotionProps } from "motion/react"
import { type ComponentProps } from "react"

type SectionProps = ComponentProps<"section"> &
  MotionProps & { withAnimation?: boolean }

const Section = ({
  id,
  className,
  children,
  withAnimation = true,
  ...props
}: SectionProps) => {
  return (
    <motion.section
      id={id}
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 text-center sm:max-w-xl sm:px-10 md:max-w-3xl lg:max-w-4xl",
        className
      )}
      initial={withAnimation ? "hidden" : undefined}
      whileInView={withAnimation ? "visible" : undefined}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ staggerChildren: 0.25 }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default Section
