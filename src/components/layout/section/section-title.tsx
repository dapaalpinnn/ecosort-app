import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

type SectionTitleProps = ComponentProps<"h2"> & {
  as?: "h1" | "h2"
  color?: "primary" | "secondary"
}

const colorVariants = {
  primary: "text-primary",
  secondary: "text-background",
}

const SectionTitle = ({
  as: Tag = "h2",
  color = "primary",
  children,
  className,
}: SectionTitleProps) => {
  return (
    <Tag
      className={cn(
        "text-3xl leading-tight font-medium tracking-tighter sm:text-4xl lg:text-5xl",
        colorVariants[color],
        className
      )}
    >
      {children}
    </Tag>
  )
}

export default SectionTitle
