import { type PaginationData } from "@/types/pagination"

/**
 * waste bank data structure
 */
export interface WasteBankData {
  id: number
  name: string
  address: string
  village: string
  district: string
  capacity: number
  incomingVolume: number
  managedVolume: number
  processedWasteVolume: number
  transportedVolume: number
  latitude: number
  longitude: number

  /**
   * distance from user location
   * optional because not all endpoint return it
   */
  distance?: number
}

/**
 * waste bank api response structure
 */
export interface WasteBankDataResponse {
  success: boolean
  data: WasteBankData[]
  pagination: PaginationData
}
