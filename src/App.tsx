import Navbar from "@/components/layout/navbar"
import Home from "@/pages/home"
// import Article from "@/pages/article"
import { Routes, Route } from "react-router-dom"
import Upload from "@/pages/upload"
import Contact from "@/pages/contact"
import TermsCondition from "@/pages/terms-and-conditions"
// import PrivacyPolicy from "./pages/privacy-policy"

export function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<TermsCondition />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
