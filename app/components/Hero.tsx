import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const heroImageUrl = "https://res.cloudinary.com/dkzt44dkk/image/upload/v1740027413/m4bqq0vnrt8rknqlj7cj"
const blurImageUrl = `${heroImageUrl}.webp?c_scale,w_20,q_10`

export default function Hero() {
  return (
      <section
          id="home"
          className="relative h-[calc(50vh+4rem)] md:h-[calc(70vh+4rem)] lg:h-[calc(80vh+4rem)] flex items-center justify-center"
      >
        <Image
            src={heroImageUrl || "/placeholder.svg"}
            alt="Luxurious home"
            fill
            sizes="100vw"
            quality={90}
            priority
            placeholder="blur"
            blurDataURL={blurImageUrl}
            className="object-cover z-0"
            loading="eager"
        />
        <div className="z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-medium mb-8 font-lexend">Capture Your Property&apos;s Best Side</h1>
          <Button variant="outline" size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
            <Link href="mailto:barnsleyt@gmail.com">Book Now</Link>
          </Button>
        </div>
      </section>
  )
}

