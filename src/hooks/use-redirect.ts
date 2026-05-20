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
    if (isPending) return
    if (isAuthenticated) {
      navigate(redirectTo, { replace: true })
    }
  }, [isAuthenticated, isPending, navigate, redirectTo])
}
