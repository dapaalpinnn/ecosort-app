import { Routes, Route } from "react-router-dom"
import { MainLayout, ProtectedLayout, AuthLayout } from "@/common/route-layouts"
import Home from "@/pages/home"
import SignUp from "@/pages/sign-up"
import SignIn from "@/pages/sign-in"
import Result from "@/pages/result"
import Upload from "@/pages/upload"
import Article from "@/pages/article"
import History from "@/pages/history"
import Contact from "@/pages/contact"
import WasteBank from "@/pages/waste-bank"
import ScrollToTop from "@/common/scroll-to-top"
import PrivacyPolicy from "@/pages/privacy-policy"
import TermsCondition from "@/pages/terms-and-conditions"

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/waste-bank" element={<WasteBank />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />

          <Route element={<ProtectedLayout />}>
            <Route path="/upload" element={<Upload />} />
            <Route path="/history" element={<History />} />
            <Route path="/result" element={<Result />} />
          </Route>
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
