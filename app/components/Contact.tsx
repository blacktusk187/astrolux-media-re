"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!name.trim()) newErrors.name = "Name is required"
    if (!email.trim()) newErrors.email = "Email is required"
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid"
    if (!message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      const subject = encodeURIComponent("New Contact Form Submission")
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`)
      window.location.href = `mailto:tim@astroluxmedia.com?subject=${subject}&body=${body}`
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
        duration: 5000,
      })
      // Reset form fields
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
    } else {
      toast({
        title: "Error",
        description: "Please correct the errors in the form.",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  return (
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
              <Image
                  src="https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?q=80&w=4032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Contact Us"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-center font-lexend">Contact Us</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <Input type="tel" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <div>
                  <Textarea
                      placeholder="Your Message"
                      className={`h-32 ${errors.message ? "border-red-500" : ""}`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

