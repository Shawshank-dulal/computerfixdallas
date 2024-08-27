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

        <div className="main_container inside_sidespace  text-center flex flex-col justify-center items-center h-full pt-[12rem] pb-20">
          <div className="flex flex-col justify-center items-center">
            <motion.ul
              ref={ref}
              variants={container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.li variants={items}>
                <div className="flex items-center justify-center text-[14px]">
                  <span className="max-w-fit px-[16px] py-[8px] rounded-[52px] flex items-center gap-2 justify-center text-[#FF7003] border border-[#FF700347]">
                    {" "}
                    <FiPhone /> <p>123-456-7890</p>
                  </span>
                </div>
              </motion.li>
              <motion.li variants={items}>
                <p className="font-medium mt-[16px] max-w-[632px] leading-[2.98rem] text-[32px] sm:text-[48px] tracking-tight">
                  Premier Computer Repair Services in Dallas
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
                <p className="mt-4 text-[17px] max-w-[522px] text-[#FFDCBF]">
                  Experience unparalleled expertise and swift service for all
                  your computer repair needs. Our seasoned technicians are
                  committed to getting your devices up and running efficiently
                  and affordably, ensuring minimal downtime and maximum
                  satisfaction.
                </p>
              </motion.li>
            </motion.ul>
            <motion.ul
              ref={ref}
              variants={container3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.li variants={items}>
                <div className="mt-6 flex gap-6 items-center text-[16px]">
                  <Link
                    href="/contact-us?action=call"
                    className="rounded-[52px] px-[20px] py-[10px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #D15A00 0%, #924104 134.15%)",
                    }}
                  >
                    Book a free Call
                  </Link>
                  <Link href="/contact-us?action=message">Contact Us</Link>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
