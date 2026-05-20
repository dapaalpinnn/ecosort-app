/**
 * format distance value into meters or kilometers
 *
 * @example
 * 1500 -> 1.5km
 * 500 -> 500m
 */
export const formatDistance = (distance?: number): string => {
  if (distance === undefined || distance === null) {
    return "-"
  }

  /**
   * convert to kilometers if distance is greater than or equal to 1000 meters
   */
  if (distance >= 1000) {
    return `${(distance / 1000).toFixed(1)} km`
  }

  return `${distance.toFixed(0)} m`
}
