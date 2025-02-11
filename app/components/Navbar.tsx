"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import LogoIcon from "./LogoIcon"

const leftNavItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
]

const rightNavItems = [
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white bg-opacity-90"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex">
            <Link href="/" className="text-xl font-normal text-black font-jura flex items-center gap-2">
              <LogoIcon className="w-12 h-12" />
              Astrolux Media
            </Link>
          </div>

          {/* Navigation items */}
          <div className="hidden lg:flex items-center justify-end flex-grow">
            <div className="flex space-x-4">
              {leftNavItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={(e) => handleClick(e, item.href)}>
                  <Button variant="ghost" className="text-black hover:text-gray-700">
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="flex space-x-4 ml-4">
              {rightNavItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={(e) => handleClick(e, item.href)}>
                  <Button variant="ghost" className="text-black hover:text-gray-700">
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-4">
            <Button variant="ghost" className="text-black hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

