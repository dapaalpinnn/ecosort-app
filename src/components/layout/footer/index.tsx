import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { footerLinks } from "@/components/layout/footer/data/footer-data"
import ecosort from "@/assets/brand/ecosort.png"
import FooterBanner from "@/components/ui/footer-banner"
import FooterLinkGroup from "@/components/ui/footer-link"

const Footer = () => {
  return (
    <footer className={cn("mx-auto my-10 flex max-w-7xl flex-col sm:px-10")}>
      <FooterBanner />
      <div className="flex flex-col gap-8 px-6 py-10 md:flex-row md:justify-between">
        <div className="flex max-w-xs flex-col gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={ecosort} alt="Ecosort AI" className="w-30" />
          </Link>
          <p className="text-lg tracking-tight text-muted-foreground">
            <span className="font-medium text-foreground">AI-powered</span>{" "}
            waste classification for smarter environmental solutions.
          </p>
        </div>
        {footerLinks.map((group) => (
          <FooterLinkGroup
            key={group.title}
            title={group.title}
            links={group.links}
          />
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        2026 EcoSort AI. All right reserved.
      </p>
    </footer>
  )
}

export default Footer
