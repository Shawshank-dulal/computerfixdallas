import BlogDetails from '@/components/Page/BlogPage/BlogDetails/BlogDetails'
import { fetchblogs, fetchSingleblog } from '@/utils/blogs'
import React from 'react'

const page = async(props) => {
  const blogslug=props.searchParams.id
  // console.log("Blogs id:",blogslug)
  const post = await fetchSingleblog(props.searchParams.id);
  console.log("POST details blog:",post)
  return (
    <div>
        <BlogDetails blogslug={blogslug}/>
    </div>
  )
}

export default page


export async function generateMetadata(props){
  const postData = await  fetchSingleblog(props.searchParams.id);
  const post=postData.data
  if (!post) {
    return {}
  }
  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}/blogs/${props.params.slug}?id:${props.searchParams.id}`;


  return {
    title: post.attributes.title,
    description: post.attributes.description,
    // image:`${config.api}${data?.attributes?.image?.data?.attributes?.url}`,
    openGraph: {
      title: post.attributes.title,
      description:
        post.attributes.description,

      images:
        {
          url: `${config.api}${post?.attributes?.image?.data?.attributes?.url}`, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: post.attributes.title,
        },
      locale: "en_US",
      type: "website",
      url: canonicalUrl,
    },

    twitter: {
      card: post.attributes.title,
      title: post.attributes.title,
      description:
      post.attributes.description,
      creator: post.attributes.title,
      images: {
        url: `${config.api}${data?.attributes?.image?.data?.attributes?.url}`, // Must be an absolute URL
        alt: post.attributes.title,
      },
    },
  }
}