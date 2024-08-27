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

const Introduction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
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
  )
}

export default Introduction