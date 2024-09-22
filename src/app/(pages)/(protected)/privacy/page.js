import Policy from '@/components/Page/Policy/Policy'
import React from 'react'

const page = () => {
  return (
    <div>
      <Policy/>
    </div>
  )
}

export default page


export async function generateMetadata(){
  const imageUrl =  "https://www.computerfixdallas.com/theme.png";

  return {
    title: "Privacy",
    description: "We may collect personal information such as your name, contact details, and device information when you use our services. This information helps us provide accurate diagnostics and solutions for your computer repair needs.",
    // image: imageUrl,
    url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/blog`,
    openGraph: {
      title: "Privacy",
      description: "We may collect personal information such as your name, contact details, and device information when you use our services. This information helps us provide accurate diagnostics and solutions for your computer repair needs.",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: "Privacy",
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/blog`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Privacy",
      description: "We may collect personal information such as your name, contact details, and device information when you use our services. This information helps us provide accurate diagnostics and solutions for your computer repair needs.",
      creator: "Privacy",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: "Privacy",
        },
      ],
    },
  };
}