
import About_us from '@/components/Page/About-us/About_us'
import React from 'react'

const page = () => {
  return (
    <div>
      <About_us/>
    </div>
  )
}

export default page

export async function generateMetadata(){
  const imageUrl =  "https://www.computerfixdallas.com/theme.png";

  return {
    title: "About Us",
    description: "At Computerfixdallas, we are dedicated to providing fast, reliable, and professional computer repair services. With years of experience in the tech industry, our team of certified technicians specializes in diagnosing and fixing a wide range of issues, from hardware malfunctions to software problems. We believe in delivering top-notch customer service, ensuring that your devices are back up and running in no time. Whether you're a business or an individual, our goal is to offer tailored solutions that keep your technology performing at its best. Trust us to handle all your computer repair needs with precision and care.",
    // image: imageUrl,
    url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/blog`,
    openGraph: {
      title: "About Us",
      description: "At Computerfixdallas, we are dedicated to providing fast, reliable, and professional computer repair services. With years of experience in the tech industry, our team of certified technicians specializes in diagnosing and fixing a wide range of issues, from hardware malfunctions to software problems. We believe in delivering top-notch customer service, ensuring that your devices are back up and running in no time. Whether you're a business or an individual, our goal is to offer tailored solutions that keep your technology performing at its best. Trust us to handle all your computer repair needs with precision and care.",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: "About Us",
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/blog`,
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us",
      description: "At Computerfixdallas, we are dedicated to providing fast, reliable, and professional computer repair services. With years of experience in the tech industry, our team of certified technicians specializes in diagnosing and fixing a wide range of issues, from hardware malfunctions to software problems. We believe in delivering top-notch customer service, ensuring that your devices are back up and running in no time. Whether you're a business or an individual, our goal is to offer tailored solutions that keep your technology performing at its best. Trust us to handle all your computer repair needs with precision and care.",
      creator: "About Us",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: "About Us",
        },
      ],
    },
  };
}