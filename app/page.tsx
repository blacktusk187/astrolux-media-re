import Hero from "./components/Hero"
import Description from "./components/Description"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Prices from "./components/Prices"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Description />
            <Services />
            <Portfolio />
            <Prices />
            <Blog />
            <Contact />
            <Footer />
        </main>
    )
}

