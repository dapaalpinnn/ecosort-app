import Section from "@/components/layout/section/section"
import SectionTitle from "@/components/layout/section/section-title"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"
import Button from "@/components/ui/button"

import recycleImage from "@/assets/brand/second-life-better-life.png"
import recycleTrash from "@/assets/images/recycle-trash.png"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { statistics } from "@/pages/home/data/statistics"
import { useNavigate } from "react-router-dom"
// import { features } from "@/pages/home/data/features"
// import { wasteTypes } from "@/pages/home/data/waste-types"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Section id="hero" className="min-h-[80svh]">
        <SecondLifeBetterLife />
        <SectionTitle as="h1" className="leading-tight">
          EcoSort AI. Your Digital Partner for Sustainable Living.
        </SectionTitle>
        <p className="w-3/4 leading-tight tracking-tight text-muted-foreground">
          Asisten digital Anda sebagai solusi praktis identifikasi sampah dan
          panduan daur ulang — Second Life Better Life!
        </p>
        <div className="mt-4 flex items-center gap-4">
          <Button
            variant="outline"
            className="cursor-pointer"
            size="lg"
            onClick={() => navigate("article")}
          >
            Bacaan Artikel
          </Button>
          <Button size="lg" onClick={() => navigate("upload")}>
            Pilih Gambar
          </Button>
        </div>
      </Section>

      <Section id="about" contentClassName="lg:max-w-4xl xl:max-w-5xl">
        <div className="bg-primary sm:rounded-4xl md:grid md:grid-cols-2">
          <div className="flex flex-col gap-4 px-8 py-12 sm:p-10">
            <SectionTitle
              as="h2"
              color="secondary"
              className="flex w-full items-center gap-4 text-left md:gap-4 lg:gap-8"
            >
              Tentang Ecosort{" "}
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                src={recycleImage}
                alt="Recycle"
                className="w-10 invert sm:w-12 lg:w-16"
              />
            </SectionTitle>
            <p className="text-left text-lg leading-tight tracking-tight text-muted-foreground">
              Kami menghadirkan solusi digital masa kini. Dirancang khusus untuk
              menjembatani celah antara teknologi dan kelestarian lingkungan.
              Dengan memanfaatkan sistem klasifikasi berbasis kecerdasan buatan,
              platform ini memandu Anda untuk memilah dan mendaur ulang berbagai
              jenis sampah domestik secara jauh lebih efisien.
            </p>
          </div>
          <div className="flex items-center p-8 pb-16 sm:p-10">
            <img
              src={recycleTrash}
              alt="Gambar"
              className="mx-auto h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Section id="statistic" className="min-h-svh py-18 lg:py-28">
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
      </Section>

      <Section id="features" className="py-18 lg:py-28">
        <Badge>Bagaimana kami membantu?</Badge>
        <SectionTitle as="h2">
          Solusi digital untuk mempermudah Anda memilah dan mendaur ulang sampah
          secara efisien.
        </SectionTitle>
        {/* <ScrollHorizontal items={features} /> */}
      </Section>

      <Section id="waste-type">
        <Badge>Jenis Sampah yang Diidentifikasi</Badge>
        <SectionTitle as="h2">
          Kenali lebih dalam jenis-jenis sampah untuk proses pemilahan dan daur
          ulang yang lebih tepat.
        </SectionTitle>
        {/* <ScrollHorizontal items={wasteTypes} /> */}
      </Section>
    </div>
  )
}

export default Home
