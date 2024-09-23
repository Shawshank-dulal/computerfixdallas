"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";

import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import config from "@/config";

const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Format the date to "27 JUL 2023"
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const Introduction = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <>
 

    <div >
        
      <div
        className="absolute w-full bg-no-repeat bg-center bg-cover h-[756px] z-[-10] overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg.svg')",
        }}
      >
        
      </div>
      
     <div className="inside_sidespace">
     <div className="main_container  text-center flex flex-col justify-center items-center h-full pt-[12rem] pb-20">
        <div >
          <motion.ul
            ref={ref} className="flex flex-col justify-center items-center"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
              <motion.li variants={items}>
              <div className="flex items-center justify-center text-[14px]">
             <span className="max-w-fit px-[16px] py-[8px] rounded-[52px] flex items-center gap-2 justify-center text-[#FF7003] border border-[#FF700347]">   <p>{formatDate(data?.attributes?.created_data)}</p></span>
              </div>
            </motion.li>
            <motion.li variants={items}>
              <p className="font-medium mt-[16px] max-w-[632px] leading-[2.98rem] text-[32px] sm:text-[48px] tracking-tight">
              {data?.attributes?.title}
              </p>
            </motion.li>
            <motion.li variants={items}>
            <Image className="mt-6" width={911} height={496} src={`${config.api}${data?.attributes?.image?.data?.attributes?.url}`} alt="blog_details"/>
            </motion.li>
          </motion.ul>

  
          
        
        </div>
      </div>
     </div>
     
    </div>
    </>
  );
};

export default Introduction;
