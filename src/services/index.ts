import axios, { type AxiosResponse } from "axios"

/**
 * axios client instance
 */
export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
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
