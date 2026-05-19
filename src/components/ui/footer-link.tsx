import { Link } from "react-router-dom"
import { motion } from "motion/react"

type FooterLinkGroupProps = {
  title: string
  links: { label: string; to: string }[]
}

const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => {
  return (
    <div className="flex flex-col gap-3 tracking-tight">
      <h4 className="text-lg font-medium">{title}</h4>

      <ul className="flex flex-col gap-2 lg:gap-4">
        {links.map((link) => (
          <motion.li
            key={link.to}
            initial="initial"
            whileHover="hover"
            animate="initial"
            variants={{ initial: { x: 0 }, hover: { x: 10 } }}
            className="w-fit"
          >
            <Link
              to={link.to}
              className="relative text-lg text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}

              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-current"
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinkGroup
