import { createAuthClient } from "better-auth/react"

/**
 * better auth client configuration
 */
export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_SERVER_URL,
  fetchOptions: { credentials: "include" },
})
