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
            src="https://sjc.microlink.io/h7QNu15S0q-zzTFVhavdoL4DzBlEADeiyDtWjfEZc7dwnXPrT9lnzIwgXCg91eujAUWuA704uGwnPuCvLR4JAw.jpeg"
            alt="Modern luxury mountain home at twilight with snow-capped peaks in background"
            fill
            sizes="100vw"
            quality={90}
            priority
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

