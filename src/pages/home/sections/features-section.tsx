"use client"

import { Badge } from "@/components/ui/badge"
import { useScroll, useTransform, motion } from "motion/react"
import { useRef, useEffect, useState } from "react"

import { cards } from "@/pages/home/data/cards"
import { getConfig } from "@/pages/home/utils"

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
      <div className="mx-auto flex flex-col items-center gap-4 px-6 text-center sm:max-w-2xl sm:px-6 md:max-w-3xl">
        <Badge variant="outline" className="tracking-tight">
          Bagaimana kami membantu?
        </Badge>
        <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
          Solusi digital untuk mempermudah Anda memilah dan mendaur ulang sampah
          secara efisien.
        </h2>
      </div>

      <div ref={containerRef} className="relative mt-16 h-[350vh]">
        {" "}
        {/* scroll runway */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div className="flex" style={{ x, gap }}>
            <div style={{ width: sidePad, flexShrink: 0 }} />{" "}
            {/* left spacer */}
            {cards.map((item) => (
              <div
                key={item.id}
                className="relative flex shrink-0 flex-col overflow-hidden rounded-xl bg-white"
                style={{
                  width: itemWidth,
                  height: itemHeight,
                }}
              >
                <div
                  className="relative h-[75%]"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-white to-transparent" />
                </div>

                <div className="flex flex-col gap-4 p-6">
                  <Badge className="text-xs tracking-tight">{item.badge}</Badge>
                  <h3 className="text-[28px] leading-tight font-medium tracking-tighter text-gray-900 sm:text-xl md:text-3xl md:font-medium">
                    {item.label}
                  </h3>
                  <p className="sm:mt- leading-tight tracking-tight text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
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
