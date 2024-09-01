"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  container,
  container2,
  container3,
  container4,
  items,
} from "@/components/Animation/Motion/MotionFramer";

import { FiPhone } from "react-icons/fi";
import Image from "next/image";
const Introduction = ({updatedDate}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const formattedDate = new Date(updatedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <>
      <div className="">
        <div
          className="absolute w-full bg-no-repeat bg-center bg-cover h-[756px] z-[-100] overflow-hidden"
          style={{
            top: "0",
            left: "0",

            backgroundImage: "url('/images/bg.svg')",
          }}
        ></div>

        <div className="main_container inside_sidespace  text-center flex flex-col justify-center items-center h-full pt-[12rem] pb-14">
          <div className="flex flex-col justify-center items-center">
            <motion.ul
              ref={ref}
              variants={container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.li variants={items}>
                <p className="font-medium  leading-[2.98rem] text-[32px] sm:text-[48px] tracking-tight">
                Terms And Conditions
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
                <p className="mt-4 text-[17px]  text-[#FFDCBF]"> Updated on {formattedDate}</p>
              </motion.li>
            </motion.ul>
            <motion.ul
              ref={ref}
              variants={container3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.li variants={items}></motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
