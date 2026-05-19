import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { LoadingText } from "@/components/ui/loading"
import { ArrowUpRight } from "lucide-react"
import { type WasteBankData } from "@/types/waste-bank"
import Section from "@/components/layout/section"
import SectionTitle from "@/components/ui/section-title"
import WasteBankCard from "@/pages/waste-bank/components/waste-bank-card"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"

type WasteBankRecommendationProps = {
  banks: WasteBankData[]
  isLoading: boolean
}

const WasteBankRecommendation = ({
  banks,
  isLoading,
}: WasteBankRecommendationProps) => {
  const isEmpty = !isLoading && banks.length === 0

  return (
    <Section id="waste-bank-recommendation" className="py-10">
      <SecondLifeBetterLife />
      <SectionTitle as="h2" className="mx-auto">
        Bank Sampah Terdekat
      </SectionTitle>
      <p className="text-sm text-muted-foreground">
        Temukan lokasi pengelolaan sampah di sekitar Anda
      </p>
      <div className="mt-4">
        {isLoading || isEmpty ? (
          <div className="flex min-h-40 items-center justify-center rounded-3xl border border-dashed bg-muted/30 p-6 text-center">
            {isLoading ? (
              <LoadingText description="Mencari bank sampah terdekat..." />
            ) : (
              <p className="text-sm text-muted-foreground">
                Tidak ada rekomendasi bank sampah ditemukan.
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {banks.map((bank) => (
              <WasteBankCard key={bank.id} bank={bank} />
            ))}
          </div>
        )}
      </div>
      {!isLoading && !isEmpty && (
        <div className="mt-6 flex justify-center">
          <Link to="/waste-bank">
            <Badge
              variant="outline"
              className="cursor-pointer px-4 py-2 text-sm tracking-tight transition-all hover:bg-muted"
            >
              Lihat bank sampah lainnya
              <ArrowUpRight className="ml-1 size-4" />
            </Badge>
          </Link>
        </div>
      )}
    </Section>
  )
}

export default WasteBankRecommendation
