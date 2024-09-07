import config from "@/config";
import { BlogsData } from "@/db/BlogsData";
import { fetchblogs } from "@/utils/blogs";
import Link from "next/link";
import React from "react";

const Blogs = async() => {
  const fetchData=await fetchblogs()
  const data=fetchData.blogs.data
  console.log(data)
 
  return (
   <div>
    {data ?  <div className="grid lg:grid-cols-2 gap-5 gap-y-10 ">
      {data.map((item, index) => {
        return (
         <Link href={`/blogs/${item.attributes.slug}`}>
          <div key={index} className=" flex flex-wrap sm:flex-nowrap gap-4">
            <div
              className="min-w-[255px] min-h-[174px]  relative bg-no-repeat bg-cover rounded-[18px]"
              style={{
                backgroundImage: `url(${config.api}${item.attributes.image.data.attributes.url})`,
              }}
            >
              <div className=" max-h-fit flex justify-end ">
                <p className=" bg-[#100600d5] font-medium text-[#FF6E00] text-[12px]  px-[6px] py-[3px] m-2 rounded-[8px]">
                {item.attributes.category}
                </p>
              </div>
            </div>
            <div className="">
              <p className="  font-bold text-[20px] text-[#fff]">
              {item.attributes.title}
              </p>
              <p className="text-[#9c9a99] dallas_services_description text-[16px] mt-[4px]">
              {item.attributes.description}
              </p>
              <p className="text-[#FF7003] mt-[14px]">Read More</p>
            </div>
          </div></Link>
        );
      })}
    </div>
    :'No data'}
   </div>
  );
};

export default Blogs;
