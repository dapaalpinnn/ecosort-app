import { Badge } from "@/components/ui/badge/badge"

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-20 md:py-28">
      <div className="mx-auto flex flex-col items-center gap-4 px-6 text-center sm:max-w-2xl sm:px-10 md:max-w-3xl">
        <Badge variant={"outline"} className="text-[12px] tracking-tight">
          Bagaimana kami membantu?
        </Badge>
        <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
          Solusi digital untuk mempermudah Anda memilah dan mendaur ulang sampah
          secara efisien.
        </h2>
      </div>
    </section>
  )
}

export default FeaturesSection
