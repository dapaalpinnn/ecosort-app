import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"
import { useAuth } from "@/hooks/use-auth"
import { features } from "@/pages/home/data/features"
import { statistics } from "@/pages/home/data/statistics"
import { wasteTypes } from "@/pages/home/data/waste-types"
import { useNavigate } from "react-router-dom"
import { PageLoading } from "@/components/ui/loading"
import { itemVariants } from "@/types/variants"
import person from "@/assets/images/person.jpg"
import Button from "@/components/ui/button"
import AiIcon from "@/assets/svg/ai-icon"
import Counter from "./components/counter"
import Section from "@/components/layout/section"
import FeatureCard from "@/pages/home/components/feature-card"
import SectionTitle from "@/components/ui/section-title"
import WasteTypeCard from "@/pages/home/components/waste-type-card"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"
import RecycleLogoAnimation from "@/pages/home/components/recycle-animation"

const Home = () => {
  const navigate = useNavigate()
  const { isAuthenticated, isPending } = useAuth()

  return (
    <>
      <Section id="hero" className="min-h-[70svh]">
        <SecondLifeBetterLife withAnimation />
        <SectionTitle withAnimation as="h1" className="leading-tight">
          EcoSort AI. Your Digital Partner for Sustainable Living.
        </SectionTitle>
        <motion.p
          variants={itemVariants}
          className="w-3/4 leading-tight tracking-tight text-muted-foreground"
        >
          Asisten digital Anda sebagai solusi praktis identifikasi sampah dan
          panduan daur ulang — Second Life Better Life!
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-4 flex items-center gap-2"
        >
          {isPending ? (
            <PageLoading description="Tunggu sebentar" />
          ) : !isAuthenticated ? (
            <>
              <Button
                className="cursor-pointer"
                size="lg"
                onClick={() => navigate("/auth/sign-in")}
              >
                <AiIcon /> Coba Sekarang
              </Button>
            </>
          ) : (
            <Button size="lg" onClick={() => navigate("/upload")}>
              <AiIcon /> Mulai Identifikasi
            </Button>
          )}
        </motion.div>
      </Section>
      <Section
        id="about"
        className="min-h-[50svh] border-y-4 border-dashed sm:rounded-4xl sm:border-2 md:border-4 lg:max-w-4xl xl:max-w-5xl"
      >
        <div className="rounded-2xl sm:rounded-4xl md:grid md:grid-cols-2">
          <div className="flex flex-col gap-4 px-8 py-12 sm:p-10">
            <SectionTitle
              withAnimation
              as="h2"
              className="flex w-full items-center gap-4 text-left md:justify-between md:gap-4 md:text-[26px] lg:justify-start lg:gap-8 lg:text-[32px]"
            >
              Tentang Ecosort <RecycleLogoAnimation />
            </SectionTitle>
            <motion.p
              variants={itemVariants}
              className="justify-between text-left text-lg leading-tight tracking-tight text-muted-foreground"
            >
              Kami menghadirkan solusi digital masa kini. Dirancang khusus untuk
              menjembatani celah antara teknologi dan kelestarian lingkungan.
              Dengan memanfaatkan sistem klasifikasi berbasis kecerdasan buatan,
              platform ini memandu Anda untuk memilah dan mendaur ulang berbagai
              jenis sampah domestik secara jauh lebih efisien.
            </motion.p>
          </div>
          <div className="flex items-center p-8 pb-16 sm:p-10">
            <motion.img
              variants={itemVariants}
              src={person}
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
            <div
              key={statistic.value}
              className="flex flex-col items-center gap-2 p-4 lg:p-0"
            >
              <h3 className="w-full text-xl font-medium tracking-tighter sm:text-2xl md:text-3xl">
                <Counter value={statistic.value} /> {statistic.unit}
              </h3>
              <p className="text-sm leading-tight tracking-tight text-muted-foreground md:text-base">
                {statistic.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="waste-type" className="min-h-svh">
        <Badge>Jenis Sampah yang Diidentifikasi</Badge>
        <SectionTitle as="h2">
          Kenali lebih dalam jenis-jenis sampah untuk proses pemilahan dan daur
          ulang yang lebih tepat.
        </SectionTitle>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3,
              },
            },
          }}
          className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {wasteTypes.map((wasteType) => (
            <WasteTypeCard
              key={wasteType.id}
              title={wasteType.label}
              image={wasteType.image}
            />
          ))}
        </motion.div>
      </Section>
      <Section id="features" className="min-h-svh py-18">
        <Badge>Bagaimana kami membantu?</Badge>
        <SectionTitle as="h2">
          Solusi digital untuk mempermudah Anda memilah dan mendaur ulang sampah
          secara efisien.
        </SectionTitle>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3,
              },
            },
          }}
          className="grid w-full grid-cols-1 gap-4 px-4 py-8 md:grid-cols-2"
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.label}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </motion.div>
      </Section>
    </>
  )
}

export default Home
