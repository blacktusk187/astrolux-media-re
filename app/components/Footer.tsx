import Link from "next/link"
import LogoIcon from "./LogoIcon"
import { Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/astrolux_media", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/astrolux-media", icon: Linkedin },
]

export default function Footer() {
  return (
      <footer className="border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-8">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-normal text-black font-jura flex items-center gap-2">
                <LogoIcon className="w-12 h-12" />
                Astrolux Media
              </Link>
            </div>
            <div className="text-sm text-gray-600 text-center md:text-right mb-4 md:mb-0">
              <p>
                Phone:{" "}
                <a href="tel:604-966-4148" className="hover:text-black transition-colors">
                  604-966-4148
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:barnsleyt@gmail.com" className="hover:text-black transition-colors">
                  barnsleyt@gmail.com
                </a>
              </p>
            </div>
            <div className="flex space-x-2">
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
          <div className="border-t py-4 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Astrolux Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

