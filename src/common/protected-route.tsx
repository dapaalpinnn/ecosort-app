import { Navigate } from "react-router-dom"
import { useAuth } from "@/hooks/use-auth"

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isPending } = useAuth()

  if (isPending) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
