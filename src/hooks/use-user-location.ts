import { useState } from "react"

/**
 * user geographic coordinates
 */
interface UserLocation {
  latitude: number
  longitude: number
}

/**
 * manage user geolocation state and retrieval
 */
const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  /**
   * get current user location from browser geolocation api
   */
  const getUserLocation = () => {
    setLoading(true)
    setError(null)

    // check browser geolocation support
    if (!navigator.geolocation) {
      setError("Browser tidak mendukung geolocation")
      setLoading(false)

      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })

        setLoading(false)
      },
      (error) => {
        setError(error.message)
        setLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    )
  }

  return {
    userLocation,
    loading,
    error,
    getUserLocation,
  }
}

export default useUserLocation
