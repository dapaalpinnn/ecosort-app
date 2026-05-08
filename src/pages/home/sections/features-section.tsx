"use client"

import { Badge } from "@/components/ui/badge"
import { useScroll, useTransform, motion } from "motion/react"
import { useRef, useEffect, useState } from "react"
import { cards } from "@/pages/home/data/cards"
import { getConfig } from "@/pages/home/utils"
import FeatureCard from "@/components/ui/feature-card"
import SectionTitle from "@/components/layout/section/section-title"

const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [{ itemWidth, itemHeight, gap }, setConfig] = useState(() =>
    typeof window !== "undefined"
      ? getConfig(window.innerWidth)
      : getConfig(1280)
  )

  useEffect(() => {
    const onResize = () => setConfig(getConfig(window.innerWidth))
    window.addEventListener("resize", onResize)

    return () => window.removeEventListener("resize", onResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // space before first card so it starts centered
  const sidePad =
    typeof window !== "undefined"
      ? Math.max(32, (window.innerWidth - itemWidth) / 2)
      : 32

  // total travel distance
  const totalTravel =
    cards.length * itemWidth +
    (cards.length - 1) * gap +
    sidePad * 2 +
    itemWidth

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalTravel])

  return (
    <section id="features" className="w-full">
      <div className="mx-auto flex flex-col items-center text-center sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
        <Badge className="tracking-tight">Bagaimana kami membantu?</Badge>
        <SectionTitle as="h2" className="py-4">
          Solusi digital untuk mempermudah Anda memilah dan mendaur ulang sampah
          secara efisien.
        </SectionTitle>
      </div>

      <div ref={containerRef} className="relative mt-16 h-[350vh]">
        {" "}
        {/* scroll runway */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div className="flex" style={{ x, gap }}>
            <div style={{ width: sidePad, flexShrink: 0 }} />{" "}
            {/* left spacer */}
            {cards.map((item) => (
              <FeatureCard
                key={item.label}
                item={item}
                itemWidth={itemWidth}
                itemHeight={itemHeight}
              />
            ))}
            <div style={{ width: sidePad, flexShrink: 0 }} />{" "}
            {/* right spacer */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
