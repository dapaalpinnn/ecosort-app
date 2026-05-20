import { useAuth } from "@/hooks/use-auth"
import { PageLoading } from "@/components/ui/loading"
import { Navigate, Outlet } from "react-router-dom"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import FloatingChatbot from "@/components/ui/flying-chatbot"

/**
 * main website layout
 */
export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Outlet />
        <FloatingChatbot />
      </main>
      <Footer />
    </>
  )
}

/**
 * authentication pages layout
 */
export const AuthLayout = () => {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Outlet />
    </main>
  )
}

/**
 * protected routes layout
 */
export const ProtectedLayout = () => {
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

  return <Outlet />
}
