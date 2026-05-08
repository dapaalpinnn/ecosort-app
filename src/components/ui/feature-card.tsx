import { Badge } from "@/components/ui/badge"

type FeatureItem = {
  id: number
  image: string
  badge: string
  label: string
  description: string
}

type FeatureCardProps = {
  item: FeatureItem
  itemWidth: number
  itemHeight: number
}

const FeatureCard = ({ item, itemWidth, itemHeight }: FeatureCardProps) => {
  return (
    <div
      className="relative flex shrink-0 flex-col overflow-hidden rounded-xl bg-white"
      style={{
        width: itemWidth,
        height: itemHeight,
      }}
    >
      <div
        className="relative h-[75%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      >
        <div className="absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-white to-transparent" />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <Badge className="text-xs tracking-tight">{item.badge}</Badge>
        <h3 className="text-[28px] leading-tight font-medium tracking-tighter text-gray-900 sm:text-xl md:text-3xl md:font-medium">
          {item.label}
        </h3>
        <p className="leading-tight tracking-tight text-gray-600">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard
