"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";
import Image from "next/image";

const Process = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
   <div className="py-20" style={{
    background: "linear-gradient(180deg, rgba(185, 80, 0, 0.01) 0%, rgba(185, 80, 0, 0.23) 100%)"

   }}>
     <div className="main_container ">
    <div className="inside_sidespace">
    <motion.ul
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.li variants={items}>
      <p className="text-[#FF7003]  uppercase font-bold text-[16px] ">
      OUR PROCESS
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
      <p className="text-[32px] mt-3 font-semibold max-w-[586px] leading-tight tracking-tight">
      Getting your computer repaired is easy with our straightforward process      </p>
      </motion.li>
      </motion.ul>
    
    <div className="mt-16">
        <Image width={956} height={536} src='/images/process/1.svg' alt="process"/>
    </div>
    </div>

 
  </div>

   </div>
  )
}

export default Process