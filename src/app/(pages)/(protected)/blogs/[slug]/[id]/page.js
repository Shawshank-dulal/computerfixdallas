import BlogDetails from "@/components/Page/BlogPage/BlogDetails/BlogDetails";
import config from "@/config";
import { fetchSingleblog } from "@/utils/blogs";
import React from "react";

const page = async (props) => {
  // const blogslug = props.searchParams.id;
  const blogslug = props?.params?.slug;
  const blogId = props?.params?.id;
  console.log("Blogs slug:",blogslug)
  console.log("Blogs id:",blogId)
  const post = await fetchSingleblog(blogId);
  // console.log("POST details blog:", post);
  return <div>
    <BlogDetails blogslug={blogId} post={post}/>
    </div>;
};

export default page;

export async function generateMetadata(props){
  const blogslug = props?.params?.slug;
  const blogId = props?.params?.id;
  const postData = await fetchSingleblog(blogId);
  const post=postData?.blogs?.data

    // Log values to the server console for debugging
    console.log("Blog ID:", blogId);
    console.log("Blog Slug:", post);

  if (!post) {
    return {}
  }

  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}/blogs/${blogslug}/${blogId}`;
  return {
    title: post?.attributes?.title,
    description: `${post?.attributes?.description} ${post.attributes?.keywords}`,
    // image:`${config.api}${data?.attributes?.image?.data?.attributes?.url}`,
    keywords: [post?.attributes?.keywords],
    openGraph: {
      title: post?.attributes?.title,
      description:
        `${post?.attributes?.description} ${post.attributes?.keywords}`,
      keywords: `${post?.attributes?.description} ${post.attributes?.keywords}`,
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
      `${post?.attributes?.description} ${post.attributes?.keywords}`,
      creator: post?.attributes?.title,
      images: {
        url: `${config.api}${post?.attributes?.image?.data?.attributes?.url}`, // Must be an absolute URL
        alt: post?.attributes?.title,
      },
    },
  }
}
