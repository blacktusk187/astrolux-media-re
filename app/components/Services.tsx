import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sunset,
  LayoutDashboard,
  Sun,
  CloudRain,
  Eraser,
  Sprout,
  ZapIcon as Tap,
  Home,
  Map,
  FileVideo,
  PresentationIcon as PresentationScreen,
  Sunrise,
  SunsetIcon as DuskIcon,
  PlayCircle,
} from "lucide-react"

const services = [
  {
    title: "Photography",
    description: "High-quality photos that showcase your property's best features",
    image: "https://live.staticflickr.com/65535/50369385956_05cc37fc9e_h.jpg",
  },
  {
    title: "Videography",
    description: "Engaging video tours that bring your property to life",
    image:
        "https://images.unsplash.com/photo-1431068799455-80bae0caf685?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Drone",
    description: "Stunning aerial views that capture your property's full scope and surroundings",
    image:
        "https://plus.unsplash.com/premium_photo-1669226795832-052c76c6af6d?q=80&w=3950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Websites",
    description: "Custom-designed websites to showcase your properties and services online",
    image:
        "https://www.realestatewebmasters.com/blog/image-optimization-and-seo-for-photos/",
  },
]

const photoServices = [
  { title: "Natural Twilight", description: "Sunset scene enhancement", icon: Sunset },
  { title: "Virtual Staging", description: "Add digital decor", icon: LayoutDashboard },
  { title: "Changing Seasons", description: "Winter to spring", icon: Sun },
  { title: "Rain to Shine", description: "Remove rain & clouds", icon: CloudRain },
  { title: "Object Removal: 1-4 Items", description: "Erase small clutter", icon: Eraser },
  { title: "Object Removal: Clear Room", description: "Decluttering whole spaces", icon: Eraser },
  { title: "Day to Dusk", description: "Twilight approximation", icon: Sunset },
  { title: "Water in Pool", description: "Grime to glam!", icon: Tap },
  { title: "Lawn Replacement", description: "Add green grass", icon: Sprout },
]

const videoServices = [
  { title: "Property Video", description: "Go-to video edit", icon: Home },
  { title: "Walkthrough Video", description: "Continuous gliding footage", icon: Map },
  { title: "Reels", description: "Daytime reels, dusk reels for social media", icon: FileVideo },
  { title: "Slideshows", description: "Flashy photo montage", icon: PresentationScreen },
]

const droneServices = [
  { title: "Day Drone Photography", description: "Aerial property showcase", icon: Sunrise },
  { title: "Dusk Drone Photography", description: "Stunning twilight aerials", icon: DuskIcon },
  { title: "Slow Motion Video", description: "Cinematic aerial footage", icon: PlayCircle },
]

export default function Services() {
  return (
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
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
                  <CardContent>
                    <CardDescription className="font-lexend">{service.description}</CardDescription>
                  </CardContent>
                </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Photography & Video Services</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold mb-4">Photography Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {photoServices.map((service, index) => (
                      <Card key={index} className="bg-white hover:bg-gray-50 transition-colors">
                        <CardContent className="p-4 flex items-start space-x-3">
                          <div className="shrink-0">
                            <service.icon className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">{service.title}</h5>
                            <p className="text-sm text-gray-500">{service.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Video Services</h4>
                <div className="grid grid-cols-1 gap-4">
                  {videoServices.map((service, index) => (
                      <Card key={index} className="bg-white hover:bg-gray-50 transition-colors">
                        <CardContent className="p-4 flex items-start space-x-3">
                          <div className="shrink-0">
                            <service.icon className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">{service.title}</h5>
                            <p className="text-sm text-gray-500">{service.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Drone Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {droneServices.map((service, index) => (
                  <Card key={index} className="bg-white hover:bg-gray-50 transition-colors">
                    <CardContent className="p-4 flex items-start space-x-3">
                      <div className="shrink-0">
                        <service.icon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{service.title}</h4>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

