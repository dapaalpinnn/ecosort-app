export type ResultDetailKey = "dampak" | "pembuangan" | "saran"

export interface TabItem {
  label: string
  value: ResultDetailKey
}

export const tabItems: TabItem[] = [
  {
    label: "Dampak",
    value: "dampak",
  },
  {
    label: "Pembuangan",
    value: "pembuangan",
  },
  {
    label: "Saran",
    value: "saran",
  },
]
