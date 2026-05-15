/**
 * format distance value into meters or kilometers
 */
export const formatDistance = (distance?: number): string => {
  if (distance === undefined || distance === null) {
    return "-"
  }

  if (distance >= 1000) {
    return `${(distance / 1000).toFixed(1)} km`
  }

  return `${distance.toFixed(0)} m`
}
