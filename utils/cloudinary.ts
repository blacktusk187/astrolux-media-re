import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const uploadImage = async (file: File) => {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("upload_preset", "real_estate_photos")

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  )

  const data = await response.json()
  return data.secure_url
}

export const getOptimizedImageUrl = (imageUrl: string, width: number, height: number) => {
  return cloudinary.url(imageUrl, {
    width,
    height,
    crop: "fill",
    quality: "auto",
    fetch_format: "auto",
  })
}

