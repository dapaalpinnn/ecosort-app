import { Navigate } from "react-router-dom"
import { useAuth } from "@/hooks/use-auth"
import PageLoading from "@/components/ui/page-loading"

/**
 * protected route component props
 */
interface ProtectedRouteProps {
  children: React.ReactNode
}

/**
 * protect routes from unauthenticated access
 */
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isPending } = useAuth()

  /**
   * show loading state while checking authentication
   * */
  if (isPending) {
    return <PageLoading description="Tunggu sebentar" />
  }

  /**
   * redirect unauthenticated users to sign in page
   */
  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
