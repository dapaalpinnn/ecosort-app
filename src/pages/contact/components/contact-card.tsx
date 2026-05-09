"use client"

import { type LucideIcon } from "lucide-react"
import { motion } from "motion/react"
import { itemVariants } from "@/utils/variants"

type ContactCardProps = {
  icon: LucideIcon
  label: string
  description: string
}

const ContactCard = ({ icon: Icon, label, description }: ContactCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex w-full items-center gap-4 rounded-xl sm:w-auto"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <Icon size={24} />
      </div>
      <div className="flex flex-col text-left text-muted-foreground">
        <h2 className="text-base tracking-tight">{label}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

export default ContactCard
