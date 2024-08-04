"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  container,
  container2,
  container3,
  container4,
  container6,
  items,
} from "@/components/Animation/Motion/MotionFramer";

import FaqContent from "./Content/FaqContent";
import Image from "next/image";

const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id="faqs"
      className=" inside_sidespace flex flex-col justify-center items-center w-full"
    >
      {/* <div className="second_background"></div> */}

      <div>
        <motion.ul
          ref={ref}
          variants={container2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.li variants={items}>
            <div className="mt-[100px] flex flex-col justify-center items-center w-full">
              <span className="text-[#FF7003]  text-[14px]  font-semibold ">
              Frequently Asked Questions
              </span>
            </div>
          </motion.li>
        </motion.ul>
        <motion.ul
          ref={ref}
          variants={container3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.li variants={items}>
            <div className="max-w-[586px] mt-[8px]">
              <p className=" text-wrap inside_sidespace font-semibold text-[32px] lg:tracking-[-1px] leading-[120%] text-center">
              Find answers to common questions about our services.
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </div>

      <motion.ul className="relative"
        ref={ref}
        variants={container6}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
          <FaqContent />
         <div>
         <Image style={{
          top:'50%',
          left:'50%',
          transform:'translate(-50%,-50%)',
          
        }} className="absolute  z-[-10]" width={682} height={682} src='/images/bg/ell.svg' alt="gradient image"/>
 
         </div>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Faq;
