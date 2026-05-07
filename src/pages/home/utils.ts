/**
 * Get inner width based on screen size
 *
 * @param width - Screen width
 */
export const getConfig = (width: number) => {
  if (width < 640) return { itemWidth: 310, itemHeight: 500, gap: 12 }
  if (width < 1024) return { itemWidth: 360, itemHeight: 500, gap: 16 }
  return { itemWidth: 350, itemHeight: 520, gap: 20 }
}
