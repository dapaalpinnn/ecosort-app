"use client"

import { cn } from "@/lib/utils"
import { TextAlignJustify, X, ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useState } from "react"
import { navigationData } from "@/components/layout/navbar/utils"
import { NavLink } from "react-router-dom"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import ecosortImage from "@/assets/brand/ecosort.png"

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = useCallback(() => setSticky(window.scrollY >= 50), [])
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [handleScroll, handleResize])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
          <nav
            className={cn(
              "flex h-fit w-full items-center justify-between gap-3.5 transition-all duration-500 lg:gap-6",
              sticky
                ? "rounded-full border border-border/40 bg-background/60 p-2.5 shadow-2xl shadow-primary/5 backdrop-blur-lg"
                : "border-transparent bg-transparent"
            )}
          >
            <NavLink to="/">
              <img src={ecosortImage} alt="EcoSort" className="w-32 lg:w-40" />
            </NavLink>

            <NavigationMenu className="rounded-full p-0.5 max-lg:hidden">
              <NavigationMenuList className="flex gap-0">
                {navigationData.map((navItem) => (
                  <NavigationMenuItem key={navItem.title}>
                    <NavLink
                      to={navItem.href}
                      className="rounded-full px-2 py-2 text-[16px] tracking-tight text-muted-foreground outline outline-transparent transition hover:text-primary hover:shadow-xs hover:outline-border lg:px-4"
                    >
                      {navItem.title}
                    </NavLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex cursor-pointer items-center justify-center rounded-full border border-border p-2 lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {isOpen ? <X size={20} /> : <TextAlignJustify size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-background/70 backdrop-blur-md lg:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-2 px-8">
              {navigationData.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 py-3 text-3xl font-medium tracking-tight text-primary transition-colors hover:text-primary"
                >
                  {item.title}
                  <motion.div
                    className="opacity-0 transition-all duration-400 group-hover:opacity-100"
                    layoutId={undefined}
                  >
                    <ArrowUpRight size={30} />
                  </motion.div>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
