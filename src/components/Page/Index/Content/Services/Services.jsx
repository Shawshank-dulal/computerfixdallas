"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";
import Image from "next/image";
import ServiceItems from "./ServiceItems/ServiceItems";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="main_container py-20">
      <div className="inside_sidespace">
      <motion.ul
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.li variants={items}>
        <p className="text-[#FF7003]  uppercase font-bold text-[16px] ">
          Services
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
        <p className="text-[48px] mt-3 font-medium max-w-[653px] leading-[2.85rem] tracking-tight">
          Comprehensive, Data-Driven Solutions for Your Business Needs
        </p>
        </motion.li>
        </motion.ul>
        <ServiceItems/>
      </div>
   
    </div>
  );
};

export default Services;
