import recycleTrash from "@/assets/images/recycle-trash.png"
import PageSection from "@/components/layout/section/page-section"
import SectionTitle from "@/components/layout/section/section-title"
import recycleImage from "@/assets/brand/second-life-better-life.png"
import { motion } from "motion/react"

const AboutEcosortSection = () => {
  return (
    <PageSection
      id="about-ecosort"
      contentClassName="lg:max-w-4xl xl:max-w-5xl"
    >
      <div className="bg-primary sm:rounded-2xl md:grid md:grid-cols-2">
        <div className="flex flex-col gap-4 px-8 py-12 sm:p-10">
          <SectionTitle
            as="h2"
            color="secondary"
            className="flex items-center gap-4 text-left md:gap-4 lg:gap-8"
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
    </PageSection>
  )
}

export default AboutEcosortSection
