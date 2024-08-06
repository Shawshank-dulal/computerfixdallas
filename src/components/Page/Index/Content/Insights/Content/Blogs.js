import { BlogsData } from "@/db/BlogsData";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 gap-y-10 mt-10">
      {BlogsData.map((item, index) => {
        return (
          <Link href={`/blogs/ultimate-machine-${index}`}>
          <div key={index} className=" flex flex-wrap sm:flex-nowrap gap-4">
            <div
              className="min-w-[255px] min-h-[174px]  relative bg-no-repeat bg-cover rounded-[18px]"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className=" max-h-fit flex justify-end ">
                <p className=" bg-[#100600d5] font-medium text-[#FF6E00] text-[12px]  px-[6px] py-[3px] m-2 rounded-[8px]">
                  Article
                </p>
              </div>
            </div>
            <div className="">
              <p className="  font-bold text-[20px] text-[#fff]">
                {item.title}
              </p>
              <p className="text-[#9c9a99] text-[16px] mt-[4px]">
                {item.description}
              </p>
              <p className="text-[#FF7003] mt-[14px]">Read More</p>
            </div>
          </div></Link>
        );
      })}
    </div>
  );
};

export default Blogs;
