import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import Button from "@/components/ui/button"

type LogoutButtonProps = {
  onClick: () => void
}

const LogoutButton = ({ onClick }: LogoutButtonProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="lg">
          Keluar
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader className="tracking-tight">
          <AlertDialogTitle>Yakin ingin keluar?</AlertDialogTitle>

          <AlertDialogDescription>
            Anda akan keluar dari sesi saat ini dan perlu login kembali untuk
            mengakses akun.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>

          <AlertDialogAction onClick={onClick}>Ya, keluar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LogoutButton
