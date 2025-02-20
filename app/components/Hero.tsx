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
            src="https://res.cloudinary.com/dkzt44dkk/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1740027413/m4bqq0vnrt8rknqlj7cj.webp"
            alt="Luxurious home"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dkzt44dkk/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1740027413/m4bqq0vnrt8rknqlj7cj.webp"
            className="z-0"
        />
        <div className="z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-medium mb-8 font-lexend">Capture Your Property&apos;s Best Side</h1>
          <Button variant="outline" size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
            <Link href="mailto:tim@astroluxmedia.com">Book Now</Link>
          </Button>
        </div>
      </section>
  )
}

