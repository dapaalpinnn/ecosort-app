import { cn } from "@/lib/utils"
import { type ComponentProps } from "react"

type PageSectionProps = ComponentProps<"section"> & {
  contentClassName?: string
}

const PageSection = ({
  id,
  className,
  contentClassName,
  children,
  ...props
}: PageSectionProps) => {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-7xl sm:px-10", className)}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-4 text-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl",
          contentClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default PageSection
