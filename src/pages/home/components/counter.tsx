import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react"
import { useEffect, useRef } from "react"

type CounterProps = {
  value: number
  duration?: number
}

export default function Counter({ value, duration = 1 }: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const hasDecimal = value % 1 !== 0

  const rounded = useTransform(() =>
    count.get().toLocaleString("id-ID", {
      minimumFractionDigits: hasDecimal ? 2 : 0,
      maximumFractionDigits: hasDecimal ? 2 : 0,
    })
  )

  useEffect(() => {
    if (!isInView) return

    const controls = animate(count, value, {
      duration: duration,
    })

    return () => controls.stop()
  }, [isInView, value, count, duration])

  return <motion.span ref={ref}>{rounded}</motion.span>
}
