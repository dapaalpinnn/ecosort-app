import { Link } from "react-router-dom"
import SectionTitle from "@/components/layout/section/section-title"
import RecycleImage from "@/pages/home/components/recycle-animation"

const FooterBanner = () => {
  return (
    <div className="w-full bg-primary px-8 py-10 sm:rounded-2xl md:px-10">
      <SectionTitle as="h2" color="secondary" className="text-left text-2xl">
        Jadilah bagian dari perubahan menuju pengelolaan sampah yang lebih
        cerdas.
      </SectionTitle>
      <Link
        to="/article"
        className="mt-20 flex w-fit items-center gap-4 rounded-lg bg-accent px-5 py-3 tracking-tight text-foreground"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }}
      >
        <p className="tracking-tight sm:text-xl">Second life, better life</p>
        <RecycleImage />
      </Link>
    </div>
  )
}

export default FooterBanner
