import config from "@/config";
import { ComputerSpec } from "@/db/Spec";
import { fetchServices } from "@/utils/services";
import Image from "next/image";
import React from "react";

const TypeDetails = async ({ serviceSlug }) => {
  const servicesData = await fetchServices();
  const services = servicesData.services.data;
  return (
    <div className="relative top-[-12.5rem] md:max-w-[550px]">
      {services
        .filter((item) => item.attributes.slug === serviceSlug)
        .map((item2, index2) => {
          return (
            <div key={index2} className="flex flex-col ">
              <Image
                width={50}
                height={50}
                src={`${config.api}${item2.attributes.image.data.attributes.url}`}
                alt="specific"
              />
              <div className="inline-flex items-center gap-[10px] mt-[19px]">
                <p className="text-[32px] font-bold tracking-[0.64px]  text-[#fff]">
                  {item2.attributes.title}
                </p>
                {item2.attributes.discount != 0 ? (
                  <span className="font-bold uppercase tracking-[0.8px] text-[12px] px-[8px] py-[4px] bg-[#3C9E00] rounded-[16px]">
                    {item2.attributes.discount || ""}% OFF
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="text-[#ffffff]  mt-[10px] text-[16px] tracking-[0.32px] leading-snug">
                {item2.attributes.summary}
              </div>

              <div className="text-[#cfcfcf]  mt-[32px] text-[16px] tracking-[0.32px] leading-snug">
                {item2.attributes.description.map((item3, index3) => {
                  return <p key={index3}>{item3.children[0].text}</p>;
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TypeDetails;
