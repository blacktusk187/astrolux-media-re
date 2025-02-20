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
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, phone, message }),
        })

        if (response.ok) {
          toast({
            title: "Message Sent",
            description: "Thank you for your message. We'll get back to you soon!",
            variant: "success",
            duration: 5000,
          })
          // Reset form fields
          setName("")
          setEmail("")
          setPhone("")
          setMessage("")
          setErrors({})
        } else {
          const errorData = await response.json()
          throw new Error(errorData.error || "Failed to send message")
        }
      } catch (error) {
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
          variant: "destructive",
          duration: 5000,
        })
      } finally {
        setIsSubmitting(false)
      }
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
                <div className="space-y-1">
                  <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={errors.name ? "border-red-500" : ""}
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                      <p className="text-red-500 text-xs" id="name-error">
                        {errors.name}
                      </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                      <p className="text-red-500 text-xs" id="email-error">
                        {errors.email}
                      </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      autoComplete="tel"
                  />
                </div>
                <div className="space-y-1">
                  <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      className={`h-32 ${errors.message ? "border-red-500" : ""}`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && (
                      <p className="text-red-500 text-xs" id="message-error">
                        {errors.message}
                      </p>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                      <>
                        <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                          <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                          ></circle>
                          <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                  ) : (
                      "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

