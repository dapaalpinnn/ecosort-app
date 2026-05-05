import HeroSection from "@/pages/home/components/hero-section"
import AboutEcosortSection from "@/pages/home/components/about-ecosort-section"

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />
      <AboutEcosortSection />
    </div>
  )
}

export default Home
