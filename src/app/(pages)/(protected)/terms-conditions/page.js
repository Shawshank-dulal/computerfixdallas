import TermsAndConditions from '@/components/Page/TermsAndConditions/TermsAndConditions'
import React from 'react'

const page = () => {
  return (
    <div>
      <TermsAndConditions/>
      </div>
  )
}
export default page

export async function generateMetadata(){
  const imageUrl =  "https://www.computerfixdallas.com/theme.png";

  return {
    title: "Terms and Conditions",
    description: "We may collect personal information such as your name, contact details, and device information when you use our services. This information helps us provide accurate diagnostics and solutions for your computer repair needs.",
    // image: imageUrl,
    url: `${process.env.NEXT_PUBLIC_URL}/blog`,
    openGraph: {
      title: "Terms and Conditions",
      description: "We may collect personal information such as your name, contact details, and device information when you use our services. This information helps us provide accurate diagnostics and solutions for your computer repair needs.",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: "Terms and Conditions",
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_URL}/blog`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Terms and Conditions",
      description: "We may collect personal information such as your name, contact details, and device information when you use our services. This information helps us provide accurate diagnostics and solutions for your computer repair needs.",
      creator: "Terms and Conditions",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: "Terms and Conditions",
        },
      ],
    },
  };
}