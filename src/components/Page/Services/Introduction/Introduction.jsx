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
import Link from "next/link";
const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div>
        <div
          className="absolute w-full bg-no-repeat bg-center bg-cover h-[756px] z-[-10] overflow-hidden"
          style={{
            backgroundImage: "url('/images/bg.svg')",
          }}
        ></div>

        <div className="main_container inside_sidespace  text-center flex flex-col justify-center items-center h-full pt-[12rem] ">
          <div className="flex flex-col justify-center items-center">
            <motion.ul
              ref={ref}
              variants={container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.li variants={items}>
                <div className="flex items-center justify-center text-[14px]">
                  <span className="max-w-fit px-[16px] py-[8px] rounded-[52px] flex items-center gap-2 justify-center text-[#FF7003] uppercase">
                    <p>Services</p>
                  </span>
                </div>
              </motion.li>
              {/* <motion.li variants={items}>
                <p className="font-medium mt-[10px] max-w-[632px] leading-[2.98rem] text-[32px] sm:text-[48px] tracking-tight">
                  Premier Computer Repair Services in Dallas
                </p>
              </motion.li> */}
            </motion.ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
