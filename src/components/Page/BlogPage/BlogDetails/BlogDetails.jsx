import React from "react";
import Introduction from "./Introduction/Introduction";
import BlogContent from "./BlogContent/BlogContent";
import Newsletter from "../../Newsletter/Newsletter";
import Blogs from "../../Index/Content/Insights/Content/Blogs";
import BlogTemp from "../../BlogTemp/BlogTemp";
import { fetchblogs } from "@/utils/blogs";

const BlogDetails = async ({blogslug}) => {
  const fetchData = await fetchblogs();
  const data = fetchData?.blogs?.data;
  
  return (
    <div>
      {data && data
        .filter((item) => item.attributes.slug === blogslug)
        .map((item2, index2) => {
          return (
            <div key={index2}>
              <Introduction data={item2} />
              <BlogContent data={item2} />
              <Newsletter />
              <BlogTemp />
            </div>
          );
        })}
    </div>
  );
};

export default BlogDetails;
