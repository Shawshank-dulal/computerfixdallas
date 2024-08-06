"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";

import { FiPhone } from "react-icons/fi";
import Image from "next/image";
const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
 

    <div className="inside_sidespace">
        
      <section
        className="absolute w-full bg-no-repeat bg-center bg-cover h-[756px] z-[-10]"
        style={{
          backgroundImage: "url('/images/bg.svg')",
        }}
      >
        
      </section>
      
      <div className="main_container  text-center flex flex-col justify-center items-center h-full pt-[12rem] pb-10">
        <div className="flex flex-col justify-center items-center">
          <motion.ul
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            
            <motion.li variants={items}>
              <p className="font-medium mt-[16px] max-w-[632px] leading-[2.98rem] text-[32px] sm:text-[48px] tracking-tight">
              Blogs
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
          Have Questions, Suggestions, or need assistance? We’re Here to help
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
