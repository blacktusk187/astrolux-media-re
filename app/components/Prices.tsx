import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingPlans = [
  {
    title: "Basic Photography Package",
    price: "$280",
    description: "Properties up to 1500 sqf",
    features: ["Up to 15 high-quality photos", "Premium editing", "24-hour delivery"],
  },
  {
    title: "Standard Photography Package",
    price: "$350",
    description: "Properties from 1501 - 2500 sqf",
    features: ["Up to 25 high-quality photos", "Premium editing", "24-hour delivery", "Drone photography"],
  },
  {
    title: "Premium Photography Package",
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
                        Choose {plan.title}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

