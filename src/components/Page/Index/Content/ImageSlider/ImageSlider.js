import { ImageSliderData } from "@/db/ImageSlider";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ImageSlider = () => {
  return (
    <div>
      <Marquee className="">
        {ImageSliderData.map((item, index) => {
          return <Image className="mx-3" key={index} width={200} height={200} src={item.image} alt="sliderImage" />;
        })}
      </Marquee>

      <Marquee direction="right" className="my-10">
        {ImageSliderData.map((item, index) => {
          return <Image className="mx-3" key={index} width={200} height={200} src={item.image} alt="sliderImage" />;
        })}
      </Marquee>
    </div>
  );
};

export default ImageSlider;
