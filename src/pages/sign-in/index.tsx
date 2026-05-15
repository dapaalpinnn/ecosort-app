import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import Button from "@/components/ui/button"
import Section from "@/components/layout/section"
import authImage from "@/assets/images/sign-up-image.png"
import SectionTitle from "@/components/layout/section/section-title"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"
import useRedirect from "@/hooks/use-redirect"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useRedirect()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError(null)

    // validation
    if (!email || !password) {
      setError("Semua field wajib diisi")
      return
    }

    try {
      setLoading(true)

      const { error } = await authClient.signIn.email({
        email,
        password,
      })

      // better auth error
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

  return (
    <Section className="lg:max-w-6xl">
      <div className="grid w-full items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <SecondLifeBetterLife />
          <SectionTitle as="h1" className="mt-4 lg:text-3xl">
            Masuk ke Ecosort AI
          </SectionTitle>
          <form onSubmit={handleLogin} className="mt-8 w-full max-w-sm">
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Masukkan email Anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Kata Sandi</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Masukkan kata sandi Anda"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                </Field>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Masuk..." : "Masuk"}
                </Button>
                <p className="text-sm text-muted-foreground">
                  Belum memiliki akun?{" "}
                  <Link to="/auth/sign-up" className="underline">
                    Daftar sekarang
                  </Link>
                </p>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
        <div className="relative hidden overflow-hidden rounded-4xl lg:block">
          <img
            src={authImage}
            alt="EcoSort AI"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Section>
  )
}

export default SignIn
