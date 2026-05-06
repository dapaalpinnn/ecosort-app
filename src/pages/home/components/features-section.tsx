"use client"

import { Badge } from "@/components/ui/badge/badge"
import { useScroll, useTransform, motion } from "motion/react"
import { useRef, useEffect, useState } from "react"

const items = [
  {
    id: 1,
    color: "#ff0088",
    label: "Night One",
    image: "/photos/tokyo-shinjuku-2/image-1.jpg",
  },
  {
    id: 2,
    color: "#dd00ee",
    label: "Night Two",
    image: "/photos/tokyo-shinjuku-2/image-2.jpg",
  },
  {
    id: 3,
    color: "#9911ff",
    label: "Night Three",
    image: "/photos/tokyo-shinjuku-2/image-3.jpg",
  },
  {
    id: 4,
    color: "#0d63f8",
    label: "Night Four",
    image: "/photos/tokyo-shinjuku-2/image-4.jpg",
  },
]

const getConfig = (w: number) => {
  if (w < 640) return { itemWidth: 300, itemHeight: 400, gap: 16 }
  if (w < 1024) return { itemWidth: 360, itemHeight: 460, gap: 20 }
  return { itemWidth: 420, itemHeight: 520, gap: 24 }
}

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
    items.length * itemWidth +
    (items.length - 1) * gap +
    sidePad * 2 +
    itemWidth

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalTravel])

  return (
    <section id="features" className="w-full">
      <div className="mx-auto flex flex-col items-center gap-4 px-4 text-center sm:max-w-2xl sm:px-6 md:max-w-3xl">
        <Badge variant="outline" className="text-xs tracking-tight">
          Bagaimana kami membantu?
        </Badge>
        <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
          Solusi digital untuk mempermudah Anda memilah dan mendaur ulang sampah
          secara efisien.
        </h2>
      </div>

      <div ref={containerRef} className="relative mt-16 h-[300vh]">
        {" "}
        {/* scroll runway */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div className="flex" style={{ x, gap }}>
            <div style={{ width: sidePad, flexShrink: 0 }} />{" "}
            {/* left spacer */}
            {items.map((item) => (
              <div
                key={item.id}
                className="relative shrink-0 overflow-hidden rounded-2xl border"
                style={{
                  width: itemWidth,
                  height: itemHeight,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div // gradient overlay
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 50%, ${item.color})`,
                    mixBlendMode: "multiply",
                  }}
                />
                <div className="absolute bottom-8 left-8 z-10">
                  <span
                    className="mb-2 block font-mono text-sm"
                    style={{ color: item.color }}
                  >
                    0{item.id}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.label}
                  </h3>
                </div>
              </div>
            ))}
            <div style={{ width: sidePad, flexShrink: 0 }} />{" "}
            {/* right spacer */}
          </motion.div>
        </div>
      </div>
      <div className="h-screen"></div>
    </section>
  )
}

export default FeaturesSection
