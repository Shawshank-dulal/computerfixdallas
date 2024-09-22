import CalForm from '@/components/Page/CalForm/CalForm'
import React from 'react'

const page = () => {
  return (
    <div>
      <CalForm/>
    </div>
  )
}

export default page

export async function generateMetadata(){
  const imageUrl =  "https://www.computerfixdallas.com/theme.png";

  return {
    title: "Book an appointment",
    description: "At Computerfixdallas, we are dedicated to providing fast, reliable, and professional computer repair services. With years of experience in the tech industry, our team of certified technicians specializes in diagnosing and fixing a wide range of issues, from hardware malfunctions to software problems. We believe in delivering top-notch customer service, ensuring that your devices are back up and running in no time. Whether you're a business or an individual, our goal is to offer tailored solutions that keep your technology performing at its best. Trust us to handle all your computer repair needs with precision and care.",
    // image: imageUrl,
    url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/blog`,
    openGraph: {
      title: "Book an appointment",
      description: "At Computerfixdallas, we are dedicated to providing fast, reliable, and professional computer repair services. With years of experience in the tech industry, our team of certified technicians specializes in diagnosing and fixing a wide range of issues, from hardware malfunctions to software problems. We believe in delivering top-notch customer service, ensuring that your devices are back up and running in no time. Whether you're a business or an individual, our goal is to offer tailored solutions that keep your technology performing at its best. Trust us to handle all your computer repair needs with precision and care.",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: "Book an appointment",
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/blog`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Book an appointment",
      description: "At Computerfixdallas, we are dedicated to providing fast, reliable, and professional computer repair services. With years of experience in the tech industry, our team of certified technicians specializes in diagnosing and fixing a wide range of issues, from hardware malfunctions to software problems. We believe in delivering top-notch customer service, ensuring that your devices are back up and running in no time. Whether you're a business or an individual, our goal is to offer tailored solutions that keep your technology performing at its best. Trust us to handle all your computer repair needs with precision and care.",
      creator: "Book an appointment",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: "Book an appointment",
        },
      ],
    },
  };
}