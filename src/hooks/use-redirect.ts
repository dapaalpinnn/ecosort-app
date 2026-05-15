import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks/use-auth"

/**
 * Redirect authenticated users to the upload page
 */
const useRedirect = (redirectTo: string = "/upload") => {
  const navigate = useNavigate()
  const { isAuthenticated, isPending } = useAuth()

  useEffect(() => {
    if (!isPending && isAuthenticated) {
      navigate(redirectTo)
    }
  }, [isPending, isAuthenticated, navigate, redirectTo])
}

export default useRedirect
