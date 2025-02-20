import "./globals.css"
import { Inter, Lexend, Montserrat, Jura } from "next/font/google"
import Navbar from "./components/Navbar"
import type React from "react"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const jura = Jura({ subsets: ["latin"], variable: "--font-jura" })

export const metadata = {
  title: "Astrolux Media - Real Estate Photography",
  description: "Professional real estate photography services",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-icon.png",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className={`font-sans ${lexend.variable} ${montserrat.variable} ${jura.variable}`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}

