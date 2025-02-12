"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const portfolioItems = [
  { src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739233999/jspftnqcfoxghndlwbyb.jpg", alt: "Luxury Home" },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739211200/vib5tctvjrk3wojkrhxa.jpg",
    alt: "Modern Interior",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739211193/orwahe3wlug9h7jnqoox.jpg",
    alt: "Cozy Cottage",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739370445/mgpxuy9xsmxpmnylglu7.jpg",
    alt: "Beachfront Property",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739234393/jp1cwtdowdznds2rbawj.jpg",
    alt: "Mountain Retreat",
  },
  { src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739234517/br9rwifiv5tmrihqlsuq.jpg", alt: "Urban Loft" },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739294457/ins9uxfxyorszqezn36n.jpg",
    alt: "Rustic Cabin",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739295347/oacj0gne1awhqjsxu5cm.jpg",
    alt: "Minimalist Apartment",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739211196/sgvzuxp4z0zocrmwdpvm.jpg",
    alt: "Suburban Family Home",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739370018/rsog8xzxgwzb965xkseg.jpg",
    alt: "Penthouse View",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739309893/kld30emygvd3zwkwriza.jpg",
    alt: "Historic Mansion",
  },
  {
    src: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739294943/ln65ex25adc52x5r8ltf.jpg",
    alt: "Contemporary Kitchen",
  },
]

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => {
                setPhotoIndex(index)
                setLightboxOpen(true)
              }}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          mainSrc={portfolioItems[photoIndex].src}
          nextSrc={portfolioItems[(photoIndex + 1) % portfolioItems.length].src}
          prevSrc={portfolioItems[(photoIndex + portfolioItems.length - 1) % portfolioItems.length].src}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + portfolioItems.length - 1) % portfolioItems.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % portfolioItems.length)}
          imageTitle={portfolioItems[photoIndex].alt}
          imageCaption={portfolioItems[photoIndex].alt}
        />
      )}
    </section>
  )
}

