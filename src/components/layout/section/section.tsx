// components/layout/section/section.tsx
import { cn } from "@/lib/utils"
import { motion, type Variants } from "motion/react"
import { type ComponentProps, Children } from "react"

type PageSectionProps = ComponentProps<"section"> & {
  contentClassName?: string
  animate?: boolean
}

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const Section = ({
  id,
  className,
  contentClassName,
  children,
  animate = true,
  ...props
}: PageSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-col items-center justify-center sm:px-10",
        className
      )}
      {...props}
    >
      <motion.div
        className={cn(
          "flex flex-col items-center gap-4 text-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl",
          contentClassName
        )}
        initial={animate ? "hidden" : undefined}
        whileInView={animate ? "visible" : undefined}
        viewport={{ once: true, amount: 0.75 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {animate
          ? Children.map(children, (child) => (
              <motion.div
                variants={childVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                {child}
              </motion.div>
            ))
          : children}
      </motion.div>
    </section>
  )
}

export default Section
