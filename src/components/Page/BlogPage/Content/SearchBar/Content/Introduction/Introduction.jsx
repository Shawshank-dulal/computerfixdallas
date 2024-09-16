"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";


const Introduction = ({query}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
 

    <div className="">
        
      <div
        className="absolute w-full bg-no-repeat bg-center bg-cover h-[756px] z-[-10]"
        style={{
          backgroundImage: "url('/images/bg.svg')",
        }}
      >
        
      </div>
      
      <div className="main_container inside_sidespace  text-center flex flex-col justify-center items-center h-full pt-[12rem] pb-10">
        <div className="flex flex-col justify-center items-center">
          <motion.ul
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            
            <motion.li variants={items}>
              <p className="font-medium mt-[16px] max-w-[632px] leading-[2.98rem] text-[32px] sm:text-[48px] tracking-tight">
              Searched for :
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
          <p className="mt-4 text-[16px] max-w-[530px] text-[#FFDCBF] leading-snug tracking-tight">
          {query}
          </p>
          </motion.li>
          </motion.ul>
          <motion.ul
            ref={ref}
            variants={container3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
       
          </motion.ul>
        
        </div>
      </div>
     
    </div>
    </>
  );
};

export default Introduction;
