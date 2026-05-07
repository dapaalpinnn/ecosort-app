import SecondLifeBetterLife from "@/components/ui/second-life-better-life"
import Button from "@/components/ui/button"
import PageSection from "@/components/layout/section/page-section"
import SectionTitle from "@/components/layout/section/section-title"

const HeroSection = () => {
  return (
    <PageSection
      id="hero"
      className="flex min-h-[80svh] items-center justify-center"
    >
      <SecondLifeBetterLife />
      <SectionTitle as="h1">
        EcoSort AI. Your Digital Partner for Sustainable Living.
      </SectionTitle>
      <p className="w-3/4 leading-tight tracking-tight text-muted-foreground">
        Asisten digital Anda sebagai solusi praktis identifikasi sampah dan
        panduan daur ulang — Second Life Better Life!
      </p>
      <div className="mt-4 flex items-center gap-4">
        <Button variant="outline" size="lg">
          Masuk
        </Button>
        <Button size="lg">Pilih Gambar</Button>
      </div>
    </PageSection>
  )
}

export default HeroSection
