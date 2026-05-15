import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Scroll to top on route change
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0 })
    }, 0)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default ScrollToTop
