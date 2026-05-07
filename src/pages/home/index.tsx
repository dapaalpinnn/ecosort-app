import HeroSection from "@/pages/home/sections/hero-section"
import AboutEcosortSection from "@/pages/home/sections/about-ecosort-section"
import FeaturesSection from "@/pages/home/sections/features-section"
import StatisticSection from "@/pages/home/sections/statistic-section"

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />
      <AboutEcosortSection />
      <StatisticSection />
      <FeaturesSection />
    </div>
  )
}

export default Home
