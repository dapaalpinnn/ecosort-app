import { Badge } from "@/components/ui/badge"
import { statistics } from "@/pages/home/data/statistics"
import PageSection from "@/components/layout/section/page-section"
import SectionTitle from "@/components/layout/section/section-title"

const Statistic = () => {
  return (
    <PageSection
      id="statistic"
      className="flex min-h-svh flex-col items-center justify-center py-18 lg:py-28"
    >
      <Badge variant={"destructive"} className="tracking-tight">
        Skala permasalahan sampah di Indonesia
      </Badge>
      <SectionTitle as="h2">
        Angka-angka berikut menunjukkan seberapa besar tantangan pengelolaan
        sampah yang kita hadapi setiap tahunnya.
      </SectionTitle>
      <div className="grid grid-cols-2 py-6 lg:grid-cols-4 lg:py-14">
        {statistics.map((statistic) => (
          <div key={statistic.value} className="flex flex-col gap-2 p-4">
            <h3 className="text-xl font-medium tracking-tighter sm:text-2xl lg:text-4xl">
              {statistic.value} {statistic.unit}
            </h3>
            <p className="text-sm leading-tight tracking-tight md:text-base">
              {statistic.description}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  )
}

export default Statistic
