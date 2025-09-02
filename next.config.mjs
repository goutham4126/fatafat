/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'i.ibb.co',
            'res.cloudinary.com',
            'images.unsplash.com',
            'lh3.googleusercontent.com',
            'avatars.githubusercontent.com',
            'plus.unsplash.com',
            'images.pexels.com',
            'cdn-icons-png.flaticon.com',
            'encrypted-tbn0.gstatic.com',
            'st3.depositphotos.com',
        ],
    },
};

export default nextConfig;
