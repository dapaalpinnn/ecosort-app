import { useCallback, useState } from "react"

interface UserLocation {
  latitude: number
  longitude: number
  savedAt?: number
}

/**
 * user location storage key
 */
const STORAGE_KEY = "user-location"

const useUserLocation = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userLocation, setUserLocation] = useState<UserLocation | null>(() => {
    try {
      const savedLocation = localStorage.getItem(STORAGE_KEY)

      return savedLocation ? JSON.parse(savedLocation) : null
    } catch {
      return null
    }
  })

  /**
   * get current user location from browser geolocation api
   */
  const getUserLocation = useCallback(() => {
    setLoading(true)
    setError(null)

    if (!navigator.geolocation) {
      setError("Browser tidak mendukung geolocation")
      setLoading(false)

      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          savedAt: Date.now(),
        }

        setUserLocation(newLocation)

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newLocation))

        setLoading(false)
      },

      (error) => {
        setError(error.message)
        setLoading(false)
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }, [])

  /**
   * clear user location from local storage
   */
  const clearUserLocation = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUserLocation(null)
  }

  return {
    userLocation,
    loading,
    error,
    getUserLocation,
    clearUserLocation,
  }
}

export default useUserLocation
