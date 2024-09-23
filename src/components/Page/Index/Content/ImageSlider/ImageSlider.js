import config from "@/config";
import { fetchHomeSlider } from "@/utils/homeslider";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ImageSlider = async() => {
  const fetchData=await fetchHomeSlider()
  const data=fetchData?.homeslider?.data


  return (
    <div className="">
      {data ? <>
        <Marquee  className="">
        {data && data.map((item, index) => {
          return <Image className="mx-3 hover:scale-110 transition-all rounded-[4px]" key={index} width={200} height={200} src={`${config.api}${item.attributes.image.data.attributes.url}`} alt="sliderImage" />;
        })}
      </Marquee>

      <Marquee direction="right" className="my-10">
        {data && data.map((item, index) => {
          return <Image className="mx-3 hover:scale-110 transition-all rounded-[4px]" key={index} width={200} height={200} src={`${config.api}${item.attributes.image.data.attributes.url}`} alt="sliderImage" />;
        })}
      </Marquee></> : 'No data'}
    </div>
  );
};

export default ImageSlider;
