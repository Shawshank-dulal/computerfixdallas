"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ServicesData } from "@/db/Services";
import Image from "next/image";
import './style.css'
const ServiceItems = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.4
      }
    }
  };
  
  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <motion.ul className="relative grid  sm:grid-cols-2 md:grid-cols-3 place-content-between gap-6 gap-y-12 mt-14"
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Image style={{
          top:'50%',
          left:'31%',
          transform:'translate(-50%,-50%)'
          
        }} className="absolute animate-pulse2  z-[-1]" width={168} height={168} src='/images/icons/star2.svg' alt="gradient image"/>
   <Image style={{
          top:'50%',
          left:'65%',
          transform:'translate(-50%,-50%)'
          
        }} className="absolute animate-pulse z-[-1]" width={168} height={168} src='/images/icons/star2.svg' alt="gradient image"/>

        {ServicesData.map((item, index) => {
          return (
         
              <motion.li variants={items} key={index} className=" flex flex-col gap-2">
                <Image
                  width={50}
                  height={50}
                  src={item.image}
                  alt={item.title}
                />
                <p>{item.title}</p>
                <p className="text-[#b4b2b3]">{item.description}</p>
           
            </motion.li>
          );
        })}
      </motion.ul>

  );
};

export default ServiceItems;
