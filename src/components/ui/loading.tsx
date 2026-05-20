import { Spinner } from "@/components/ui/spinner"
import Button from "@/components/ui/button"

type LoadingProps = {
  description?: string
}

export const Loading = ({
  description = "Sedang mengambil data",
}: LoadingProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Spinner data-icon="inline-start" />
      <p>{description}</p>
    </div>
  )
}

export const PageLoading = ({
  description = "Sedang mengambil data",
}: LoadingProps) => {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center gap-2">
      <Button
        variant={"outline"}
        className="flex items-center justify-center px-2 py-1 tracking-tight"
      >
        <Spinner data-icon="inline-start" />
        <p>{description}</p>
      </Button>
    </div>
  )
}
