import Navbar from "@/components/layout/navbar"
import Home from "@/pages/home"
import Article from "@/pages/article"
import { Routes, Route } from "react-router-dom"
import Upload from "@/pages/upload"
import Contact from "@/pages/contact"
import PrivacyPolicy from "@/pages/privacy-policy"
import TermsCondition from "@/pages/terms-and-conditions"
import BankSampah from "./pages/bank-sampah"

import Footer from "@/components/layout/footer"


export function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/bank-sampah" element={<BankSampah />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
