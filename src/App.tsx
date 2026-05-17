import { Routes, Route, Outlet } from "react-router-dom"

import ScrollToTop from "@/common/scroll-to-top"
import ProtectedRoute from "@/common/protected-route"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

import Home from "@/pages/home"
import Article from "@/pages/article"
import Upload from "@/pages/upload"
import Contact from "@/pages/contact"

import PrivacyPolicy from "@/pages/privacy-policy"
import TermsCondition from "@/pages/terms-and-conditions"

import SignUp from "@/pages/sign-up"
import SignIn from "@/pages/sign-in"
import WasteBank from "@/pages/waste-bank"
import History from "@/pages/history"

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main Layout */}
        <Route
          element={
            <>
              <Navbar />
              <main className="flex-1">
                <Outlet />
              </main>
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/waste-bank" element={<WasteBank />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Auth Layout */}
        <Route
          element={
            <main className="flex min-h-svh items-center justify-center p-6">
              <Outlet />
            </main>
          }
        >
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
