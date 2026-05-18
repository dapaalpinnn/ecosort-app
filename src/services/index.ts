import axios, { type AxiosResponse } from "axios"
import { isProductionEnvironment, developmentApiBaseUrl } from "@/config/env"

/**
 * axios client instance
 */
export const apiClient = axios.create({
  baseURL: isProductionEnvironment ? "/api" : developmentApiBaseUrl,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
})

/**
 * reusable api request handler
 */
export const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: unknown
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient({
    url,
    method,
    data,
  })

  return response.data
}
