import { Link } from "react-router-dom"
import SectionTitle from "@/components/ui/section-title"
import RecycleLogoAnimation from "@/pages/home/components/recycle-animation"

const FooterBanner = () => {
  return (
    <div className="w-full bg-primary px-8 py-10 sm:rounded-2xl md:px-10">
      <SectionTitle
        as="h2"
        color="secondary"
        className="mx-auto text-center text-2xl"
      >
        Jadilah bagian dari perubahan menuju pengelolaan sampah yang lebih baik!
      </SectionTitle>
      <Link
        to="/upload"
        className="mx-auto mt-10 flex w-fit items-center gap-4 rounded-lg bg-accent px-5 py-3 tracking-tight text-foreground md:gap-6"
      >
        <p className="tracking-tight sm:text-2xl">Second life, better life</p>
        <RecycleLogoAnimation size="small" />
      </Link>
    </div>
  )
}

export default FooterBanner
