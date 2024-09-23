import BlogPage from '@/components/Page/BlogPage/BlogPage'
import React from 'react'

const page = () => {
  return (
    <div>
      <BlogPage/>
    </div>
  )
}

export default page

export async function generateMetadata(){
  const imageUrl =  "https://www.computerfixdallas.com/theme.png";

  return {
    title: "Blogs",
    description: "Discover expert tips, troubleshooting guides, and in-depth articles on all aspects of computer repairs. From diagnosing hardware issues to resolving software glitches, our blog covers a wide range of topics to help you keep your devices running smoothly. Whether you’re dealing with slow performance, virus infections, or broken components, we provide practical solutions and the latest insights in the world of tech repairs. Stay updated on the best practices for maintaining your computer’s health and improving its longevity.",
    // image: imageUrl,
    url: `${process.env.NEXT_PUBLIC_URL}/blogs`,
    openGraph: {
      title: "Blogs",
      description: "Discover expert tips, troubleshooting guides, and in-depth articles on all aspects of computer repairs. From diagnosing hardware issues to resolving software glitches, our blog covers a wide range of topics to help you keep your devices running smoothly. Whether you’re dealing with slow performance, virus infections, or broken components, we provide practical solutions and the latest insights in the world of tech repairs. Stay updated on the best practices for maintaining your computer’s health and improving its longevity.",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: "Blogs",
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_URL}/blogs`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Blogs",
      description: "Discover expert tips, troubleshooting guides, and in-depth articles on all aspects of computer repairs. From diagnosing hardware issues to resolving software glitches, our blog covers a wide range of topics to help you keep your devices running smoothly. Whether you’re dealing with slow performance, virus infections, or broken components, we provide practical solutions and the latest insights in the world of tech repairs. Stay updated on the best practices for maintaining your computer’s health and improving its longevity.",
      creator: "Blogs",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: "Blogs",
        },
      ],
    },
  };
}