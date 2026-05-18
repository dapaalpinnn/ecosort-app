import { createAuthClient } from "better-auth/react"

/**
 * better auth client configuration
 */
export const authClient = createAuthClient({
  baseURL: `${window.location.origin}/api/auth`,
  fetchOptions: { credentials: "include" },
})
