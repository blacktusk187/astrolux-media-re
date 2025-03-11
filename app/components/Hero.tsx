import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-[calc(50vh+4rem)] md:h-[calc(70vh+4rem)] lg:h-[calc(80vh+4rem)] flex items-center justify-center"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src={`https://res.cloudinary.com/dkzt44dkk/image/upload/v1740161296/yilakznz7rihbedgsmea.webp`}
                    alt="Luxurious mountain home"
                    fill
                    priority
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="z-10 text-center text-white">
                <h1 className="text-4xl sm:text-5xl font-medium mb-8 font-lexend">Capture Your Property&apos;s Best Side</h1>
                <Button variant="outline" size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
                    <Link href="mailto:tim@astroluxmedia.com">Book Now</Link>
                </Button>
            </div>
        </section>
    )
}

