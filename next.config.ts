import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'live.staticflickr.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com/pixlmob-prod-gallery-images',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static.wixstatic.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cubicasa-wordpress-uploads.s3.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ]
    }
};

export default nextConfig;
