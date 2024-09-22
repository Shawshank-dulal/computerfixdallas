import Services from '@/components/Page/Services/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Services/>
    </div>
  )
}

export default page

export async function generateMetadata(){
  const imageUrl =  "https://www.computerfixdallas.com/theme.png";

  return {
    title: "Privacy",
    description: "At Computerfixdallas, we offer a comprehensive range of computer repair and IT support services designed to meet all your tech needs. Whether you're facing hardware malfunctions or software issues, our expert technicians are here to help with fast, reliable solutions.",
    // image: imageUrl,
    url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/blog`,
    openGraph: {
      title: "Privacy",
      description: "At Computerfixdallas, we offer a comprehensive range of computer repair and IT support services designed to meet all your tech needs. Whether you're facing hardware malfunctions or software issues, our expert technicians are here to help with fast, reliable solutions.",
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
      description: "At Computerfixdallas, we offer a comprehensive range of computer repair and IT support services designed to meet all your tech needs. Whether you're facing hardware malfunctions or software issues, our expert technicians are here to help with fast, reliable solutions.",
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