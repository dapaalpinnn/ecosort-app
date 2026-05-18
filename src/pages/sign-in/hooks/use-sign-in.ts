import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { signInSchema } from "@/pages/sign-in/schemas/sign-in-schema"

/**
 * Handle user sign in state and logic
 */
const useSignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError(null)

    /**
     * Validate form using zod
     */
    const validation = signInSchema.safeParse({
      email,
      password,
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

      const { error } = await authClient.signIn.email({
        email: validatedData.email,
        password: validatedData.password,
      })

      if (error) {
        setError(error.message || "Email atau password salah")
        return
      }
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
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
  }
}

export default useSignIn
