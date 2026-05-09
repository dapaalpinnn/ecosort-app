import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { motion, type MotionProps } from "motion/react"
import { cn } from "@/lib/utils"
import { badgeVariants } from "@/components/ui/variants"
import { itemVariants } from "@/utils/variants"

type BadgeProps = React.ComponentProps<"span"> &
  MotionProps &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
    withAnimation?: boolean
  }

const MotionSpan = motion.span
const MotionSlot = motion.create(Slot.Root)

const Badge = ({
  className,
  variant = "default",
  asChild = false,
  withAnimation = false,
  ...props
}: BadgeProps) => {
  const Comp = asChild ? MotionSlot : MotionSpan

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      variants={withAnimation ? itemVariants : undefined}
      {...props}
    />
  )
}

export { Badge }
