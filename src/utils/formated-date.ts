/**
 * format iso date to indonesian locale date string
 */
export const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}
