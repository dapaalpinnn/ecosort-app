import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Loading } from "@/components/ui/loading"
import { useRedirect } from "@/hooks/use-redirect"
import { Field, FieldSet, FieldGroup, FieldLabel } from "@/components/ui/field"
import Button from "@/components/ui/button"
import Section from "@/components/layout/section"
import useSignUp from "@/pages/sign-up/hooks/use-sign-up"
import signUpimage from "@/assets/images/sign-in-image.png"
import SectionTitle from "@/components/ui/section-title"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"

const SignUp = () => {
  useRedirect()

  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    loading,
    handleRegister,
  } = useSignUp()

  return (
    <Section className="lg:max-w-6xl">
      <div className="grid w-full items-center gap-10 lg:grid-cols-2">
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
                <Field>
                  <FieldLabel htmlFor="confirm-password">Kata sandi</FieldLabel>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Konfirmasi kata sandi Anda"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Field>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? <Loading description="Memproses" /> : "Daftar"}
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
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Sudah punya akun?{" "}
                  <Link to="/auth/sign-in" className="underline">
                    Masuk
                  </Link>
                </p>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
        <div className="relative hidden overflow-hidden rounded-4xl lg:block">
          <img
            src={signUpimage}
            alt="EcoSort AI"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Section>
  )
}

export default SignUp
