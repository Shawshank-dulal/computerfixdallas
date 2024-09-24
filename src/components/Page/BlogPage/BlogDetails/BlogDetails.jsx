import React from "react";
import Introduction from "./Introduction/Introduction";
import BlogContent from "./BlogContent/BlogContent";
import Newsletter from "../../Newsletter/Newsletter";
import Blogs from "../../Index/Content/Insights/Content/Blogs";
import BlogTemp from "../../BlogTemp/BlogTemp";
import { fetchblogs, fetchSingleblog } from "@/utils/blogs";



const BlogDetails = async ({blogslug,post}) => {
  const fetchData = await fetchSingleblog(blogslug);
  const data = fetchData?.blogs?.data;
  // console.log("Number blog",blogslug,data)

  
  return (
    <div>
 
            <div>
              <Introduction data={data} />
              <BlogContent data={data} />
              <Newsletter />
              <BlogTemp post={post}/>
            </div>
   
    </div>
  );
};



export default BlogDetails;
