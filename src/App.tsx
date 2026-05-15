import { Routes, Route } from "react-router-dom"

import ScrollToTop from "@/common/scroll-to-top"

import MainLayout from "@/layouts/main-layout"
import AuthLayout from "@/layouts/auth-layout"

import Home from "@/pages/home"
import Article from "@/pages/article"
import Upload from "@/pages/upload"
import Contact from "@/pages/contact"

import PrivacyPolicy from "@/pages/privacy-policy"
import TermsCondition from "@/pages/terms-and-conditions"

import SignUp from "@/pages/sign-up"
import ProtectedRoute from "@/layouts/protected-route"
import SignIn from "@/pages/sign-in"

export function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />

          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
