import "./globals.css"
import { Inter, Lexend, Montserrat, Jura } from "next/font/google"
import Navbar from "./components/Navbar"
import type React from "react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] })
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const jura = Jura({ subsets: ["latin"], variable: "--font-jura" })

export const metadata = {
    title: "Real Estate & Architectural Photography",
    description: "Video & photography for real estate, architecture, and interior design",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-icon.png",
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`scroll-smooth ${inter.className}`}>
        <head>
            <title>{metadata.title}</title>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="apple-touch-icon" href="/apple-icon.png" />
        </head>
        <body className={`font-sans ${lexend.variable} ${montserrat.variable} ${jura.variable}`}>
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        </body>
        </html>
    )
}

