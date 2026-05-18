import { createAuthClient } from "better-auth/react"

/**
 * better auth client configuration
 */
export const authClient = createAuthClient({
  baseURL: "/api/auth",
  fetchOptions: { credentials: "include" },
})
