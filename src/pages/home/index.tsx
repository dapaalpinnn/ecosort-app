import HeroSection from "@/pages/home/components/hero-section"
import AboutEcosortSection from "@/pages/home/components/about-ecosort-section"
import FeaturesSection from "@/pages/home/components/features-section"
import StatisticSection from "@/pages/home/components/statistic-section"

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
