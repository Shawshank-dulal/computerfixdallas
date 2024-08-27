"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";

const Introduction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
<div>
<motion.ul
    ref={ref}
    variants={container}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
  >
    <motion.li variants={items}>
<p className="text-[#FF7003]  uppercase font-bold text-[16px] ">
INSIGHTS
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
<p className="text-[32px] mt-3 font-semibold max-w-[539px] leading-tight tracking-tight">
Explore Insights and Repair Tips Here 
</p>
</motion.li>
</motion.ul>
</div>
  )
}

export default Introduction