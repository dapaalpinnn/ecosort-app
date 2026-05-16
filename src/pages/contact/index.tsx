import { motion } from "motion/react"
import { itemVariants } from "@/types/variants"
import { Mail, MapPin, PhoneCall } from "lucide-react"
import Section from "@/components/layout/section"
import ContactCard from "@/pages/contact/components/contact-card"
import SectionTitle from "@/components/ui/section-title"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"

const Contact = () => {
  return (
    <Section className="min-h-[80svh] gap-4 px-4 md:gap-6 md:px-8">
      <SecondLifeBetterLife withAnimation />
      <SectionTitle withAnimation className="w-full px-2 sm:px-4 md:px-6">
        Hubungi Kami Kapan Saja.
      </SectionTitle>
      <motion.p
        variants={itemVariants}
        className="w-full text-sm leading-tight tracking-tight text-muted-foreground sm:w-3/4 sm:text-base"
      >
        Jika menemukan kendala atau membutuhkan panduan lebih lanjut, jangan
        ragu untuk menghubungi kami.
      </motion.p>
      <div className="my-6 grid w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-3 sm:gap-6">
        <ContactCard
          icon={PhoneCall}
          label="Telepon"
          description="+62 123-097-668"
        />
        <ContactCard
          icon={Mail}
          label="Email"
          description="ecosort@support.com"
        />
        <ContactCard
          icon={MapPin}
          label="Lokasi"
          description="Kota Surabaya, Indonesia"
        />
      </div>
    </Section>
  )
}

export default Contact
