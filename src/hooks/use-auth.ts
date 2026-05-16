import { authClient } from "@/lib/auth-client"

/**
 * manage authentication session state
 */
export const useAuth = () => {
  const session = authClient.useSession()

  return {
    session: session.data,
    user: session.data?.user,
    isPending: session.isPending,
    error: session.error,
    isAuthenticated: !!session.data,
  }
}
