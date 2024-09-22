import BlogDetails from "@/components/Page/BlogPage/BlogDetails/BlogDetails";
import config from "@/config";
import { fetchSingleblog } from "@/utils/blogs";
import React from "react";

const page = async (props) => {
  const blogslug = props.searchParams.id;
  // console.log("Blogs id:",blogslug)
  const post = await fetchSingleblog(props.searchParams.id);
  console.log("POST details blog:", post);
  return <div>
    <BlogDetails blogslug={blogslug}/>
    </div>;
};

export default page;

export async function generateMetadata({ params, searchParams }){
  const blogId = searchParams.id;
  const blogslug = params.slug;
  const postData = await fetchSingleblog(blogId);
  const post=postData.blogs.data

    // Log values to the server console for debugging
    console.log("Blog ID:", blogId);
    console.log("Blog Slug:", post);

  if (!post) {
    return {}
  }

  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}/blogs/${blogslug}?id:${blogId}`;
  return {
    title: post.attributes.title,
    description: `${post.attributes.description} ${post.attributes?.keywords}`,
    // image:`${config.api}${data?.attributes?.image?.data?.attributes?.url}`,
    keywords: [post?.attributes?.keywords],
    openGraph: {
      title: post.attributes.title,
      description:
        `${post.attributes.description} ${post.attributes?.keywords}`,
      keywords: `${post.attributes.description} ${post.attributes?.keywords}`,
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
      `${post.attributes.description} ${post.attributes?.keywords}`,
      creator: post.attributes.title,
      images: {
        url: `${config.api}${post?.attributes?.image?.data?.attributes?.url}`, // Must be an absolute URL
        alt: post.attributes.title,
      },
    },
  }
}
