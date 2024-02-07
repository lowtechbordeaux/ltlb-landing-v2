/** @type {import('next').NextConfig} */

const nextConfig = {
    /*
    output: 'export',
    images: {
        unoptimized: true,
    },
    */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.amazonaws.com',
            },
        ],
    },
};

export default nextConfig;
