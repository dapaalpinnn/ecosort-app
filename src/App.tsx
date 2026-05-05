import Navbar from "@/components/layout/navbar"
import Home from "@/pages/home"

export function App() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Navbar />
      <main className="flex-1">
        <Home></Home>
      </main>
    </div>
  )
}

export default App
