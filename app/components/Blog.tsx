"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

type LinkedInPost = {
    id: string
    content: string
    author: string
    timestamp: string
    likes: number
    comments: number
    imageUrl?: string
    postUrl: string // Add this line
}

// This is a mock function to simulate fetching LinkedIn posts
// In a real application, you would replace this with an actual API call
const fetchLinkedInPosts = async (): Promise<LinkedInPost[]> => {
    // Simulating an API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return [
        {
            id: "1",
            content: "📸 The Power of Professional Real Estate Photography: More Than Just Pretty Pictures",
            author: "Tim Barnsley",
            timestamp: "2025-02-18T10:30:00Z",
            likes: 45,
            comments: 12,
            imageUrl: "https://res.cloudinary.com/dkzt44dkk/image/upload/v1739370445/mgpxuy9xsmxpmnylglu7.jpg",
            postUrl:
                "https://www.linkedin.com/posts/astrolux-media_realestate-photography-realestatemarketing-activity-7297341347177320448-bP7a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAMwGOwB5gMUxVIfmzhYoHVi5EORCQhVdqs", // Add this line
        },
    ]
}

export default function Blog() {
    const [posts, setPosts] = useState<LinkedInPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPosts = async () => {
            const fetchedPosts = await fetchLinkedInPosts()
            setPosts(fetchedPosts)
            setLoading(false)
        }

        loadPosts()
    }, [])

    return (
        <section id="blog" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 font-lexend">Latest Updates</h2>
                {loading ? (
                    <div className="text-center">Loading posts...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Card key={post.id} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle className="font-lexend text-lg">{post.author}</CardTitle>
                                    <p className="text-sm text-gray-500">{new Date(post.timestamp).toLocaleDateString()}</p>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    {post.imageUrl && (
                                        <div className="mb-4 relative h-48">
                                            <Image
                                                src={post.imageUrl || "/placeholder.svg"}
                                                alt="Post image"
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-md"
                                            />
                                        </div>
                                    )}
                                    <p className="font-lexend mb-4 flex-grow">{post.content}</p>
                                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                                        <span>{post.likes} Likes</span>
                                        <span>{post.comments} Comments</span>
                                    </div>
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href={post.postUrl} target="_blank" rel="noopener noreferrer">
                                            View on LinkedIn
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

