import config from "@/config";
import { ComputerSpec } from "@/db/Spec";
import { fetchServices, fetchServicesPage } from "@/utils/services";
import Image from "next/image";
import React from "react";

const TypeDetails = async ({ serviceId }) => {

  return (
    <div className="relative top-[-12.5rem] md:max-w-[550px]">

            <div  className="flex flex-col ">
              <Image
                width={50}
                height={50}
                src={`${config.api}${serviceId?.attributes?.icon.data?.attributes?.url}`}
                alt="specific"
              />
              <div className="inline-flex items-center gap-[10px] mt-[19px]">
                <p className="text-[32px] font-bold tracking-[0.64px]  text-[#fff]">
                  {serviceId?.attributes?.title}
                </p>
                {serviceId?.attributes?.discount != 0 ? (
                  <span className="font-bold text-nowrap uppercase tracking-[0.8px] text-[12px] px-[8px] py-[4px] bg-[#3C9E00] rounded-[16px]">
                    {serviceId?.attributes?.discount || ""}% OFF
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="text-[#ffffff]  mt-[10px] text-[16px] tracking-[0.32px] leading-snug">
                {serviceId?.attributes?.summary}
              </div>

              <div className="text-[#cfcfcf]  mt-[32px] text-[16px] tracking-[0.32px] leading-snug">
                {serviceId && serviceId?.attributes?.description?.map((item3, index3) => {
                  return <p key={index3}>{item3?.children[0]?.text}</p>;
                })}
              </div>
            </div>
   
    </div>
  );
};

export default TypeDetails;
