import ContactUs from '@/components/Page/ContactUs/ContactUs'

const page = () => {
  return (
    <div>
     
      <ContactUs/>
   
    </div>
  )
}

export default page

export async function generateMetadata(){
  const imageUrl =  "https://www.computerfixdallas.com/theme.png";

  return {
    title: "Contact Us",
    description: "At Computerfixdallas, we’re here to assist you with all your computer repair and tech needs. Whether you have questions about our services, need troubleshooting help, or want to schedule a repair, we’re just a message or phone call away!",
    // image: imageUrl,
    url: `${process.env.NEXT_PUBLIC_URL}/blog`,
    openGraph: {
      title: "Contact Us",
      description: "At Computerfixdallas, we’re here to assist you with all your computer repair and tech needs. Whether you have questions about our services, need troubleshooting help, or want to schedule a repair, we’re just a message or phone call away!",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: "Contact Us",
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_URL}/blog`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us",
      description: "At Computerfixdallas, we’re here to assist you with all your computer repair and tech needs. Whether you have questions about our services, need troubleshooting help, or want to schedule a repair, we’re just a message or phone call away!",
      creator: "Contact Us",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: "Contact Us",
        },
      ],
    },
  };
}