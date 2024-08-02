"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";

import Blogs from "./Content/Blogs";
import Image from "next/image";
const Insights = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
   <div className="py-20 px-2 md:px-0 ">
     <div className="main_container inside_sidespace">
 
    <motion.ul
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.li variants={items}>
      <p className="text-[#FF7003]  uppercase font-bold text-[16px] ">
      INSIGHTS
      </p>
      </motion.li>
      </motion.ul>
      
      <motion.ul
          ref={ref}
          variants={container2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.li variants={items}>
      <p className="text-[32px] mt-3 font-semibold max-w-[539px] leading-tight tracking-tight">
      Explore Insights and Repair Tips Here 
      </p>
      </motion.li>
      </motion.ul>
      <div className="relative">
      <Blogs/>
      <Image style={{
          top:'50%',
          left:'49%',
          transform:'translate(-50%,-50%)'
          
        }} className="absolute animate-pulse z-[-1]" width={168} height={168} src='/images/icons/star2.svg' alt="gradient image"/>
 
      </div>
        
 
  </div>
 
   </div>
  )
}

export default Insights