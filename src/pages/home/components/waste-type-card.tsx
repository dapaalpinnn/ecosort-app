"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"

type WasteTypeCardProps = {
  title: string
  image: string
}

const WasteTypeCard = ({ title, image }: WasteTypeCardProps) => {
  return (
    <Card className="relative mx-auto h-30 w-full max-w-sm overflow-hidden rounded-xl pt-0 shadow-lg">
      <img
        src={image}
        alt="Event cover"
        className="relative z-10 aspect-video w-full object-cover brightness-75"
      />
      <div className="absolute inset-0 z-20 bg-linear-to-b from-transparent via-black/40 to-black/70" />
      <CardHeader className="absolute bottom-4 left-4 z-30 text-left">
        <CardTitle className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-3xl">
          {title}
        </CardTitle>
      </CardHeader>
    </Card>
  )
}

export default WasteTypeCard
