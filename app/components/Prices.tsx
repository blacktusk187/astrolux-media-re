import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

type ServiceOption = {
  name: string
  details?: string
  price: string
}

type AdditionalService = {
  title: string
  description: string
  image: string
  options: ServiceOption[]
  note?: string
}

const pricingPlans = [
  {
    title: "Basic",
    price: "$280",
    description: "Properties up to 1500 sqf",
    features: ["Up to 15 high-quality photos", "Premium editing", "24-hour delivery"],
  },
  {
    title: "Standard",
    price: "$350",
    description: "Properties from 1501 - 2500 sqf",
    features: ["Up to 25 high-quality photos", "Premium editing", "24-hour delivery"],
  },
  {
    title: "Premium",
    price: "$420",
    description: "Best for luxury properties",
    features: [
      "Up to 35 high-quality photos",
      "Premium editing",
      "24-hour delivery",
      "Fire added to fireplace",
      "Water added to pool",
    ],
  },
]

const additionalServices: AdditionalService[] = [
  {
    title: "Walk-Thru Videos",
    description: "Immersive property tours",
    image: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739812939/rpast4f2xcsm6svxyv3h.webp",
    options: [
      { name: "60 Second Instagram Video", details: "no music", price: "$449" },
      { name: "2-3 minute full Video", details: "with music", price: "$599" },
      { name: "Add an agent intro/voiceover", price: "+$99" },
    ],
  },
  {
    title: "Drone Packages",
    description: "Aerial photography and videography",
    image: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739817914/qneempxfcy6patneh92a.webp",
    options: [
      { name: "Add 6 drone shots to photo package", price: "$219" },
      { name: "Drone Photography only", price: "$319" },
      { name: "Add Drone and Exterior photos\nat Twilight", price: "$299" },
      { name: "Drone slow motion video", price: "$399" },
    ],
    note: "All Drone flights are weather and location dependent",
  },
  {
    title: "Virtual Add-Ons",
    description: "Enhance your listing with virtual staging and editing",
    image: "https://cdn.shopify.com/s/files/1/0052/2085/9992/files/virtual_staging_before.png?v=1712129221",
    options: [
      { name: "Virtual Twilight", details: "Per Image", price: "$30" },
      { name: "Virtual Staging", details: "Per Image", price: "$45" },
      { name: "Object Removal", details: "Per Image", price: "$49" },
      { name: "Object Removal - Clear Room", details: "Per Image", price: "$59" },
      { name: "Rain to Shine", details: "Per Image", price: "$39" },
      { name: "Water in Pool", details: "Per Image", price: "$39" },
      { name: "Lawn Replacement", details: "Per Image", price: "$39" },
    ],
  },
  {
    title: "Floor Plans",
    description: "Detailed property layouts",
    image: "https://cubicasa-wordpress-uploads.s3.amazonaws.com/uploads/2022/04/download-floorplans.png",
    options: [
      { name: "2D Black & White with Measurements", details: "Under 2500 sq ft", price: "$99" },
      { name: "2D Black & White with Measurements", details: "2501 – 4000 sq ft", price: "$139" },
      { name: "2D Black & White with Measurements", details: "Over 4001 sq ft", price: "$179" },
      { name: "MLS Room Measurements", details: "Text Only", price: "$39" },
    ],
  },
]

export default function Prices() {
  return (
      <section id="pricing" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription className="font-lexend">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-4xl font-bold mb-4">{plan.price}</p>
                    <ul className="space-y-2 font-lexend">
                      {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg
                                className="w-4 h-4 mr-2 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                          </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`mailto:barnsleyt@gmail.com?subject=${encodeURIComponent(plan.title)}%20Photo%20Set`}>
                        Choose {plan.title} Set
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
            ))}
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                  <Card key={index} className="flex flex-col overflow-hidden">
                    <div className="relative h-48">
                      <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{service.description}</CardDescription>
                      {service.options && (
                          <ul className="mt-4 space-y-2 text-sm">
                            {service.options.map((option, i) => (
                                <li key={i} className="flex justify-between items-start">
                                  <div>
                                    <span className="font-semibold">{option.name}</span>
                                    {option.details && <span className="block text-xs text-gray-500">{option.details}</span>}
                                  </div>
                                  <span className="font-semibold">{option.price}</span>
                                </li>
                            ))}
                          </ul>
                      )}
                      {service.note && <p className="mt-4 text-xs text-gray-500 italic">{service.note}</p>}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`mailto:barnsleyt@gmail.com?subject=${encodeURIComponent(service.title)}`}>
                          {service.title === "Walk-Thru Videos"
                              ? "Choose Walk-Thru"
                              : service.title === "Drone Packages"
                                  ? "Choose Drone Package"
                                  : service.title === "Virtual Add-Ons"
                                      ? "Choose Virtual Add-On"
                                      : service.title === "Floor Plans"
                                          ? "Choose Floor Plan"
                                          : "Learn More"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

