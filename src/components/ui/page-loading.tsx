import Button from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

type LoadingProps = { description?: string }

const PageLoading = ({
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

export default PageLoading
