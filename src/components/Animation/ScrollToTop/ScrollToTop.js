"use client"
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
const ScrollToTops = () => {
  return (
    <div>
             <ScrollToTop top='40' component={<FaArrowUp />} className='scroll_top' smooth width='15' height="15"/>

    </div>
  )
}

export default ScrollToTops