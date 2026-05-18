import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { useNavigate } from "react-router-dom"
import { signUpSchema } from "@/pages/sign-up/schemas/sign-up-schema"

const useSignUp = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError(null)

    const validation = signUpSchema.safeParse({
      name,
      email,
      password,
      confirmPassword,
    })

    /**
     * Validation failed
     */
    if (!validation.success) {
      setError(validation.error.issues[0].message)
      return
    }

    /**
     * Validated data
     */
    const validatedData = validation.data

    try {
      setLoading(true)

      const { error } = await authClient.signUp.email({
        name: validatedData.name,
        email: validatedData.email,
        password: validatedData.password,
      })

      if (error) {
        setError(error.message || "Gagal membuat akun")
        return
      }

      navigate("/upload", { replace: true })
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("Terjadi kesalahan server")
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    error,
    handleRegister,
  }
}

export default useSignUp
