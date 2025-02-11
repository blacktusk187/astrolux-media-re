import Link from "next/link"
import LogoIcon from "./LogoIcon"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-normal text-black font-montserrat flex items-center gap-1">
              ASTROLUX
              <LogoIcon className="w-8 h-8" />
              MEDIA
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

