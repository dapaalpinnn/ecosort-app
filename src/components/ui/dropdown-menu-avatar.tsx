import { useAuth } from "@/hooks/use-auth"
import { authClient } from "@/lib/auth-client"
import { profileMenuItems } from "@/components/layout/navbar/data/navigation-data"
import { NavLink, useNavigate } from "react-router-dom"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar"
import Button from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DropdownMenuAvatar = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleLogout = async () => {
    try {
      await authClient.signOut()
      navigate("/")
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error ? error.message : "Terjadi kesalahan"
      )
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="size-10 border border-border">
            <AvatarImage src="https://github.com/shadcn.png" alt="Dafa Alvin" />
            <AvatarFallback>DA</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mt-2 w-fit rounded-2xl bg-background px-4 tracking-tight"
      >
        <div className="py-3 px-2">
          <p className="font-medium">{user?.name}</p>
          <p className="text-muted-foreground">{user?.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {profileMenuItems.map((item) => {
            const Icon = item.icon
            if (item.type === "link") {
              return (
                <DropdownMenuItem key={item.title} asChild>
                  <NavLink to={item.href} className="cursor-pointer">
                    <Icon />
                    {item.title}
                  </NavLink>
                </DropdownMenuItem>
              )
            }
            return (
              <DropdownMenuItem
                key={item.title}
                onClick={handleLogout}
                className="cursor-pointer text-red-500 focus:text-red-500"
              >
                <Icon />
                {item.title}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuAvatar
