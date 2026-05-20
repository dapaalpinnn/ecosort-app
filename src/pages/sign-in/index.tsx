import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Loading } from "@/components/ui/loading"
import { useRedirect } from "@/hooks/use-redirect"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import Button from "@/components/ui/button"
import Section from "@/components/layout/section"
import useSignIn from "@/pages/sign-in/hooks/use-sign-in"
import signInImage from "@/assets/images/sign-in-image.png"
import SectionTitle from "@/components/ui/section-title"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"

const SignIn = () => {
  useRedirect()

  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
  } = useSignIn()

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
                {error && (
                  <div role="alert" aria-live="polite">
                    <FieldError>{error}</FieldError>
                  </div>
                )}
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? <Loading description="Memproses" /> : "Masuk"}
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
            src={signInImage}
            alt="EcoSort AI"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Section>
  )
}

export default SignIn
