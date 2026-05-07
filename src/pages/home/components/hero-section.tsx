import SecondLifeBetterLife from "@/components/ui/second-life-better-life"
import Button from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex w-full items-center justify-center py-18"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="mx-auto flex flex-col items-center gap-4 text-center sm:max-w-2xl md:max-w-3xl">
          <SecondLifeBetterLife />

          <h1 className="mt-2 text-3xl leading-tight font-medium tracking-tighter sm:text-4xl lg:text-5xl">
            EcoSort AI. Your Digital Partner for Sustainable Living.
          </h1>

          <p className="w-3/4 text-base leading-tight tracking-tight text-muted-foreground">
            Asisten digital Anda sebagai solusi praktis identifikasi sampah dan
            panduan daur ulang — Second Life Better Life!
          </p>

          <div className="mt-4 flex items-center gap-4">
            <Button variant="outline" size="lg">
              Masuk
            </Button>
            <Button size="lg">Pilih Gambar</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
