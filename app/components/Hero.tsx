import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import { fill } from "@cloudinary/url-gen/actions/resize"

// Create and configure your Cloudinary instance.
const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
})

export default function Hero() {
    // Instantiate a CloudinaryImage object for the image with public ID 'm4bqq0vnrt8rknqlj7cj'.
    const myImage = cld.image("m4bqq0vnrt8rknqlj7cj")

    // Resize to fit into a 1600x900 rectangle while maintaining the aspect ratio.
    myImage.resize(fill().width(1600).height(900))

    return (
        <section
            id="home"
            className="relative h-[calc(50vh+4rem)] md:h-[calc(70vh+4rem)] lg:h-[calc(80vh+4rem)] flex items-center justify-center"
        >
            <div className="absolute inset-0 z-0">
                <AdvancedImage
                    cldImg={myImage}
                    plugins={[lazyload(), placeholder({ mode: "blur" })]}
                    className="object-cover w-full h-full"
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

