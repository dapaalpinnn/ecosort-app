// import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"
import Button from "@/components/ui/button"

type LoadingProps = { description?: string }

const Loading = ({ description = "Sedang mengambil data" }: LoadingProps) => {
  return (
    <Button
      variant={"outline"}
      className="flex items-center justify-center px-2 py-1 tracking-tight"
    >
      <Spinner data-icon="inline-start" />
      <p>{description}</p>
    </Button>
  )
}

export const LoadingText = ({
  description = "Sedang mengambil data",
}: LoadingProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Spinner data-icon="inline-start" />
      <p>{description}</p>
    </div>
  )
}

export default Loading
