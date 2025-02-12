import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[calc(50vh+4rem)] md:h-[calc(70vh+4rem)] lg:h-[calc(80vh+4rem)] flex items-center justify-center"
    >
      <Image
        src="https://res.cloudinary.com/dkzt44dkk/image/upload/v1739373199/cma0ztkiepoyaiovnyjr.jpg"
        alt="Luxurious home"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="z-10 text-center text-white">
        <h1 className="text-5xl font-medium mb-4">Capture Your Property&#39;s Best Side</h1>
        <p className="text-xl mb-8 font-lexend">Professional real estate photography that sells</p>
        <Button variant="outline" size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
          <Link href="mailto:barnsleyt@gmail.com">Book Now</Link>
        </Button>
      </div>
    </section>
  )
}

