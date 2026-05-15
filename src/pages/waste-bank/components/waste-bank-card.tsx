import { ChevronRight, MapPin } from "lucide-react"
import { formatDistance } from "@/utils/format-distance"
import { type WasteBankData } from "@/types/waste-bank"
import wasteBankIcon from "@/assets/images/waste-bank-icon.png"

interface WasteBankCardProps {
  bank: WasteBankData
}

const WasteBankCard = ({ bank }: WasteBankCardProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-2xl border bg-background p-4">
      <div className="flex min-w-0 items-center gap-4">
        <img
          src={wasteBankIcon}
          alt="Waste Bank Icon"
          className="h-16 w-16 shrink-0 object-contain"
        />
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold md:text-lg">
            {bank.name}
          </h3>
          <p className="mt-1 flex items-start gap-1 text-sm text-muted-foreground">
            <MapPin size={14} className="mt-0.5 shrink-0" />
            <span className="line-clamp-2">{bank.address}</span>
          </p>
        </div>
      </div>
      <p className="flex shrink-0 items-center gap-2 text-left text-sm text-muted-foreground">
        {formatDistance(bank.distance)} <ChevronRight />
      </p>
    </div>
  )
}

export default WasteBankCard
