import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Section from "@/components/layout/section"
import { Input } from "@/components/ui/input"
import Button from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"
import { Field, FieldSet, FieldGroup, FieldLabel } from "@/components/ui/field"
import SectionTitle from "@/components/layout/section/section-title"
import { Link } from "react-router-dom"
import authImage from "@/assets/images/sign-up-image.png"

const SignUp = () => {
  const navigate = useNavigate()

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    // validation
    if (!name || !email || !password) {
      setError("Semua field wajib diisi")
      return
    }

    if (password.length < 8) {
      setError("Password minimal 8 karakter")
      return
    }

    try {
      setLoading(true)

      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
      })

      // better auth error
      if (error) {
        setError(error.statusText)
        return
      }

      // redirect
      navigate("/upload")
    } catch (error: unknown) {
      setError("Terjadi kesalahan server:" + error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section className="lg:max-w-6xl">
      <div className="grid w-full items-center gap-10 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center justify-center">
          <SecondLifeBetterLife />

          <SectionTitle as="h1" className="mt-4 lg:text-3xl">
            Selamat Datang di Ecosort AI!
          </SectionTitle>

          <form onSubmit={handleRegister} className="mt-8 w-full max-w-sm">
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Nama</FieldLabel>

                  <Input
                    id="name"
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>

                  <Input
                    id="email"
                    type="email"
                    placeholder="Masukkan email Anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">Kata sandi</FieldLabel>

                  <Input
                    id="password"
                    type="password"
                    placeholder="Masukkan kata sandi Anda"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Field>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Mendaftarkan..." : "Daftar"}
                </Button>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Dengan melanjutkan, Anda menyetujui{" "}
                  <Link to="/privacy-policy" className="underline">
                    Ketentuan
                  </Link>{" "}
                  dan{" "}
                  <Link to="/terms-and-conditions" className="underline">
                    Kebijakan Privasi
                  </Link>{" "}
                  kami.
                </p>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>

        {/* RIGHT SIDE */}
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

export default SignUp
