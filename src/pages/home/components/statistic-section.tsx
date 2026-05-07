import { Badge } from "@/components/ui/badge"
import { statistics } from "@/pages/home/utils/statistics"

const StatisticSection = () => {
  return (
    <section id="statistic" className="flex min-h-screen w-full items-center">
      <div className="px-6mx-auto mx-auto flex flex-col items-center gap-4 px-6 text-center sm:max-w-2xl sm:px-6 md:max-w-3xl">
        <Badge variant={"destructive"} className="tracking-tight">
          Skala permasalahan sampah di Indonesia
        </Badge>
        <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
          Angka-angka berikut menunjukkan seberapa besar tantangan pengelolaan
          sampah yang kita hadapi setiap tahunnya.
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-8">
          {statistics.map((statistic) => (
            <div className="flex flex-col gap-2 p-2">
              <h3 className="text-lg font-semibold tracking-tighter sm:text-xl md:text-3xl">
                {statistic.value} {statistic.unit}
              </h3>
              <p className="text-sm leading-tight tracking-tight">
                {statistic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticSection
