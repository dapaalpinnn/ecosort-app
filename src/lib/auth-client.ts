import { createAuthClient } from "better-auth/react"
import {
  isProductionEnvironment,
  productionAuthApiUrl,
  developmentAuthApiUrl,
} from "@/config/env"

/**
 * better auth client configuration
 */
export const authClient = createAuthClient({
  baseURL: isProductionEnvironment
    ? productionAuthApiUrl
    : developmentAuthApiUrl,
  fetchOptions: { credentials: "include" },
})
