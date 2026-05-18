import { useAuth } from "@/hooks/use-auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

/**
 * redirect authenticated users
 */
export const useRedirect = (redirectTo = "/upload") => {
  const navigate = useNavigate()
  const { isAuthenticated, isPending } = useAuth()

  useEffect(() => {
    // wait until authentication check is complete
    if (isPending) return

    // redirect authenticated users
    if (isAuthenticated) {
      navigate(redirectTo, { replace: true })
    }
  }, [isAuthenticated, isPending, navigate, redirectTo])
}
