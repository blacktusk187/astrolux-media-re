import Hero from "./components/Hero"
import Description from "./components/Description"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Prices from "./components/Prices"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
        <Description />
      <Services />
      <Portfolio />
      <Prices />
      <Contact />
      <Footer />
        <Analytics />
        <SpeedInsights />
    </main>
  )
}

