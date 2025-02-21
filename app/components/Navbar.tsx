"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LogoIcon from "./LogoIcon"
import { Instagram, Linkedin } from "lucide-react"

const leftNavItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
]

const rightNavItems = [
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/astrolu_xmedia", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/astrolux-media", icon: Linkedin },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    setMobileMenuOpen(false)
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
                      <Button variant="ghost" className="text-black hover:text-gray-700 font-lexend">
                        {item.name}
                      </Button>
                    </Link>
                ))}
              </div>
              <div className="flex space-x-4 ml-4">
                {rightNavItems.map((item) => (
                    <Link key={item.name} href={item.href} onClick={(e) => handleClick(e, item.href)}>
                      <Button variant="ghost" className="text-black hover:text-gray-700 font-lexend">
                        {item.name}
                      </Button>
                    </Link>
                ))}
              </div>
              <div className="flex space-x-2 ml-4">
                {socialLinks.map((link) => (
                    <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="text-black hover:text-gray-700">
                        <link.icon className="h-5 w-5" />
                        <span className="sr-only">{link.name}</span>
                      </Button>
                    </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="text-black hover:text-gray-700" aria-label="Open menu">
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
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px] p-0">
                  <div className="flex flex-col py-4">
                    {[...leftNavItems, ...rightNavItems].map((item) => (
                        <Link key={item.name} href={item.href} onClick={(e) => handleClick(e, item.href)} className="py-2">
                          <Button variant="ghost" className="w-full text-left text-black hover:text-gray-700 font-lexend">
                            {item.name}
                          </Button>
                        </Link>
                    ))}
                    <div className="flex justify-center space-x-4 mt-4">
                      {socialLinks.map((link) => (
                          <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="text-black hover:text-gray-700">
                              <link.icon className="h-5 w-5" />
                              <span className="sr-only">{link.name}</span>
                            </Button>
                          </Link>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
  )
}

