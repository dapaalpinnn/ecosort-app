import { Link } from "react-router-dom"

type FooterLinkGroupProps = {
  title: string
  links: { label: string; to: string }[]
}

// Reusable per kolom link
const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => {
  return (
    <div className="flex flex-col gap-3 tracking-tight">
      <h4 className="text-lg font-medium">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="tratight text-lg text-muted-foreground transition-colors hover:text-foreground"
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
