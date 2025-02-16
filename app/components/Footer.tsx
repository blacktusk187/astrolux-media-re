import Link from "next/link"
import LogoIcon from "./LogoIcon"
import { Jura } from "next/font/google"

const jura = Jura({ subsets: ["latin"] })

export default function Footer() {
  return (
      <footer className={`border-t ${jura.className}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-8">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-normal text-black font-jura flex items-center gap-2">
                <LogoIcon className="w-12 h-12" />
                Astrolux Media
              </Link>
            </div>
            <div className="text-sm text-gray-600 text-center md:text-right">
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
          </div>
          <div className="border-t py-4 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Astrolux Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

