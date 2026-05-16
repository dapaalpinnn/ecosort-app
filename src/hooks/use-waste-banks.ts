import { useEffect, useState } from "react"
import { AxiosError } from "axios"
import { fetchWasteBanks } from "@/services/waste-bank-service"
import { type WasteBankData } from "@/types/waste-bank"

/**
 * waste bank query parameters
 */
interface UseWasteBanksProps {
  page: number
  search: string
  latitude?: number
  longitude?: number
}

/**
 * fetch and manage waste bank data
 */
const useWasteBanks = ({
  page,
  search,
  latitude,
  longitude,
}: UseWasteBanksProps) => {
  const [banks, setBanks] = useState<WasteBankData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [nearbyBanks, setNearbyBanks] = useState<WasteBankData[]>([])

  useEffect(() => {
    /**
     * get waste bank data from api
     */
    const getWasteBanks = async () => {
      try {
        setLoading(true)

        const response = await fetchWasteBanks({
          page,
          limit: 10,
          search,
          latitude,
          longitude,
        })

        setNearbyBanks(response.nearby)
        setBanks(response.data)
        setTotalPages(response.pagination.totalPages)
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.message)
        } else {
          setError("Terjadi kesalahan")
        }
      } finally {
        setLoading(false)
      }
    }

    getWasteBanks()
  }, [page, search, latitude, longitude])

  return {
    nearbyBanks,
    banks,
    loading,
    error,
    totalPages,
  }
}

export default useWasteBanks
