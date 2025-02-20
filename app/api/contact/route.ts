import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    const { name, email, phone, message } = await req.json()

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number.parseInt(process.env.SMTP_PORT || "587"),
        secure: true,  // Ensures SSL is used from the start
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    })

    try {
        // Send email
        await transporter.sendMail({
            from: process.env.SMTP_FROM_EMAIL,
            to: "tim@astroluxmedia.com",
            subject: "New Contact Form Submission",
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
            html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        })

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
    } catch (error) {
        console.error("Failed to send email:", error)
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }
}

