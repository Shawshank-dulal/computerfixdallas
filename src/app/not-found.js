import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <>
      <Navbar />
 
    <div className="inside_sidespace">
    <div className="main_container py-24 py:2 md:pt-0 flex-wrap-reverse flex md:justify-between md:flex-nowrap md:items-center md:h-screen">
        <div className="pt-6 md:pt-0">
          <span className=" text-3xl md:text-[42px] font-semibold tracking-wider md:leading-[3.2rem] max-w-[220px]">
            Page Under <p className="text-[#FF7003]">Maintenance</p>
          </span>

          <p className="pb-3 max-w-[550px] my-4 md:my-5 text-[14px] md:text-[15px] text-[#aeb4b4]">
            We apologize for the inconvenience, but our page is currently
            undergoing maintenance to enhance your browsing experience. Please
            bear with us as we work diligently to bring you a better, smoother,
            and more efficient online platform. Rest assured, our team is working
            tirelessly behind the scenes to resolve any issues and implement
            necessary updates. Thank you for your patience.
          </p>
          <Link
            href="/"
            className="bg-[#FF7003] rounded-md py-2 px-6 my-6 hover:opacity-80 tracking-wider"
          >
            Go To Home Page
          </Link>
        </div>
        <Image className="mx-auto md:mx-0 max-w-[290px] max-h-[290px] md:max-w-[400px] md:max-h-[400px]" width={400} height={400} src="/404.svg" alt="404 page" />
      </div>
    </div>
    </>
  );
};

export default notfound;
