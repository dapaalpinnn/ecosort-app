import Hero from "@/components/layout/section/home/hero"
import About from "@/components/layout/section/home/about"
import Features from "@/components/layout/section/home/features"
import Statistic from "@/components/layout/section/home/statistic"

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
      <About />
      <Statistic />
      <Features />
    </div>
  )
}

export default Home
