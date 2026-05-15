import { apiRequest } from "@/services"
import { type WasteBankDataResponse } from "@/types/waste-bank"

interface FetchWasteBanksProps {
  page?: number
  limit?: number
  search?: string
  latitude?: number
  longitude?: number
  sort?: "nearest" | "farthest"
}

/**
 * fetch all waste banks with pagination
 */
export const fetchWasteBanks = async ({
  page = 1,
  limit = 10,
  search = "",
  latitude,
  longitude,
}: FetchWasteBanksProps): Promise<WasteBankDataResponse> => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    search,
  })

  if (latitude && longitude) {
    queryParams.append("latitude", latitude.toString())
    queryParams.append("longitude", longitude.toString())
  }

  return await apiRequest<WasteBankDataResponse>(
    `/bank-sampah?${queryParams.toString()}`,
    "GET"
  )
}
