import { HistoryIcon, LogOutIcon, type LucideIcon } from "lucide-react"

export type NavigationItem = {
  title: string
  href: string
}

export type ProfileMenuItem =
  | {
      type: "link"
      title: string
      href: string
      icon: LucideIcon
    }
  | {
      type: "action"
      title: string
      action: "logout"
      icon: LucideIcon
    }

export const navigationData: NavigationItem[] = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Artikel",
    href: "/article",
  },
  {
    title: "Bank Sampah",
    href: "/waste-bank",
  },
  {
    title: "Kontak",
    href: "/contact",
  },
]

export const profileMenuItems: ProfileMenuItem[] = [
  {
    type: "link",
    title: "Riwayat",
    href: "/history",
    icon: HistoryIcon,
  },
  {
    type: "action",
    title: "Keluar",
    action: "logout",
    icon: LogOutIcon,
  },
]
