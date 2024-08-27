"use client"
import React, { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { WhyData } from "@/db/WhyData";
import { fetchWhyContents } from "@/utils/whycontents";
import config from "@/config";

const ServiceDetail = ({ item }) => {
  const [contents,setContents]=useState([])
  useEffect(()=>{
 const fetchWhyContents = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/whycontents`);
        const whydata = await res.json();
 
        const info=whydata.whycontents.data
        setContents(info)
        console.log("info",info);
        return data;
      } catch (error) {
        console.error("Failed to fetch whycontents:", error);
      }
    };

    fetchWhyContents()
  },[])
  const splideOptions = {
    type: "loop",
    perPage: 4,
    perMove: 1,
    rewind: true,
    autoplay: true, // Whether to enable autoplay
    interval: 2400, // Autoplay interval in milliseconds
    pauseOnHover: true, // Whether to pause autoplay on hover
    drag: true, // Whether to enable drag/swipe interaction
    keyboard: true, // Whether to enable keyboard navigation
    focus: "left",
    lazyLoad: "sequential",
    width: "100%",

    padding: { right: "4rem" },
    gap: "1rem",
    pagination: false,
    breakpoints: {
      1332: {
        // padding:'2rem',
      },
      1250: {
        // padding:'1rem',
      },
      1125: {
        perPage: 3,
      },
      576: {
        perPage: 1,
        padding: 0,
      },
    },
  };
  return (
    <div className="mx-auto overflow-hidden mt-14">
      <Splide options={splideOptions}>

        {contents.map((item, index) => {
          return (
            <SplideSlide key={index} className="md:max-w-[1010px] ">
              <div>
                <div className=" blogs_product_container">
                  <div
                    className="min-h-[292px]  relative bg-no-repeat bg-cover rounded-lg flex flex-col  justify-end"
                    style={{
                      backgroundImage: `url(${config.api}${item.attributes.image.data.attributes.url})`,
                    }}
                  >
                    <div className=" bg-[#100600d5] text-[16px] h-full px-[15px] py-[11px] m-2 rounded-[8px]">
                      <p className="  font-medium text-[#FF6E00]">
                      {item.attributes.title}
                      </p>
                      <p> {item.attributes.summary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default ServiceDetail;
