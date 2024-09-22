import ServicesContact from '@/components/Page/Services/ServicesContact/ServicesContact'
import config from '@/config'
import { fetchSingleService } from '@/utils/services'
import React from 'react'

const page = (props) => {
      const serviceId=props.searchParams.id
      console.log("data",serviceId)
  return (
    <div>
      <ServicesContact serviceId={serviceId}/>
    </div>
  )
}

export default page

export async function generateMetadata({ params, searchParams }){
  const serviceId = searchParams.id;
  const serviceSlug=params.slug
  const postData = await fetchSingleService(serviceId);
  const post=postData?.services?.data

    // Log values to the server console for debugging
    console.log("service ID:", serviceId);
    console.log("service service:", post);

  if (!post) {
    return {}
  }

  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}/services/${serviceSlug}?id:${serviceId}`;
  return {
    title: post?.attributes?.title,
    description:  `${post?.attributes?.summary} ${post?.attributes?.keywords}`,
    // image:`${config.api}${data?.attributes?.image?.data?.attributes?.url}`,
    keywords: [post?.attributes?.keywords],
    openGraph: {
      title: post?.attributes?.title,
      description:
         `${post?.attributes?.summary} ${post?.attributes?.keywords}`,

      images:
        {
          url: `${config.api}${post?.attributes?.image?.data?.attributes?.url}`, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: post?.attributes?.title,
        },
      locale: "en_US",
      type: "website",
      url: canonicalUrl,
    },

    twitter: {
      card: post?.attributes?.title,
      title: post?.attributes?.title,
      description:
       `${post?.attributes?.summary} ${post?.attributes?.keywords}`,
      creator: post?.attributes?.title,
      images: {
        url: `${config.api}${post?.attributes?.image?.data?.attributes?.url}`, // Must be an absolute URL
        alt: post?.attributes?.title,
      },
    },
  }
}
