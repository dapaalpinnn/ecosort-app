import { Link } from "react-router-dom"

type FooterLinkGroupProps = {
  title: string
  links: { label: string; to: string }[]
}

const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => {
  return (
    <div className="flex flex-col gap-3 tracking-tight">
      <h4 className="px-3 text-lg font-medium">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="rounded-full px-3 py-1 text-lg text-muted-foreground transition-all duration-200 hover:border hover:border-white/70 hover:bg-primary hover:text-white hover:shadow-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinkGroup
