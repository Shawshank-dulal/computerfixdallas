import config from "@/config";
import { BlogsData } from "@/db/BlogsData";
import { fetchblogs } from "@/utils/blogs";
import Link from "next/link";
import React from "react";

const Blogs = async({post}) => {
  const fetchData=await fetchblogs()
  const data=fetchData?.blogs?.data
  console.log("New Post update",post?.blogs?.data?.attributes?.category)

 
    const post_category=post?.blogs?.data?.attributes?.category

  return (
    <div className="grid lg:grid-cols-2 gap-5 gap-y-10 mt-10">
      {data.filter(items => items?.attributes?.category === (post_category ? post_category : items?.attributes?.category)).slice(-4).map((item,index)=>{

       return(
        <div key={index} >
        <Link  href={`/blogs/${item?.attributes?.slug}/${item?.id}`}>
       {/* <Link href={`/blogs/${item?.id}`}> */}
       <div className=" flex flex-wrap sm:flex-nowrap gap-4">
         <div
           className="min-w-[255px] h-[174px]  relative bg-no-repeat bg-cover rounded-[18px]"
           style={{
             backgroundImage: `url(${config.api}${item?.attributes?.image?.data?.attributes?.url})`,
           }}
         >
           <div className=" max-h-fit flex justify-end ">
             <p className=" bg-[#100600d5] font-medium text-[#FF6E00] text-[12px]  px-[6px] py-[3px] m-2 rounded-[8px]">
             {item?.attributes?.category}
             </p>
           </div>
         </div>
         <div className="">
           <p className="  font-bold text-[20px] text-[#fff] dallas_services_title">
           {item?.attributes?.title}
           </p>
           <p className="text-[#9c9a99] dallas_services_description text-[16px] mt-[4px]">
           {item?.attributes?.description}
           </p>
           <p className="text-[#FF7003] mt-[14px]">Read More</p>
         </div>
       </div></Link>
     </div>
       )
      })}
      {/* {data && data.slice(-4).map((item, index) => {
        return (
          <Link key={index}  href={`/blogs/${item?.attributes?.slug}/${item?.id}`}>

          <div className=" flex flex-wrap sm:flex-nowrap gap-4">
            <div
              className="min-w-[255px] h-[174px]  relative bg-no-repeat bg-cover rounded-[18px]"
              style={{
                backgroundImage: `url(${config.api}${item?.attributes?.image?.data?.attributes?.url})`,
              }}
            >
              <div className=" max-h-fit flex justify-end ">
                <p className=" bg-[#100600d5] font-medium text-[#FF6E00] text-[12px]  px-[6px] py-[3px] m-2 rounded-[8px]">
                {item?.attributes?.category}
                </p>
              </div>
            </div>
            <div className="">
              <p className="  font-bold text-[20px] text-[#fff] dallas_services_title">
              {item?.attributes?.title}
              </p>
              <p className="text-[#9c9a99] dallas_services_description text-[16px] mt-[4px]">
              {item?.attributes?.description}
              </p>
              <p className="text-[#FF7003] mt-[14px]">Read More</p>
            </div>
          </div></Link>
        );
      })} */}
    </div>
  );
};

export default Blogs;
