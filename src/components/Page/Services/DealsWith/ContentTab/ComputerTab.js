import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import { ComputerSpec } from "@/db/Spec";
import Link from "next/link";
import "../style.css";
import config from "@/config";
import { fetchServices } from "@/utils/services";

const ComputerTab = async () => {
  const servicesData = await fetchServices();
  const services=servicesData?.services?.data
  // console.log(servicesData.services);

  if(!services){
    <p>No data</p>
  }
  return (
    <Tabs.Content className="TabsContent1" value="computer">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  align-middle place-content-between gap-[32px] gap-y-[60px]">
        {services && services.map((item, index) => {
          return (
            <div key={index} className="flex flex-col ">
              <div className="w-[50px] h-[50px]">
                <Image
                  width={50}
                  height={50}
                  src={`${config.api}${item.attributes.image.data.attributes.url}`}
                  alt="specific"
                />
              </div>
              <div className="inline-flex items-center gap-[10px] mt-[19px]">
                <p className="text-[14px]   text-[#fff]">
                  {item.attributes.title}
                </p>
                {item.attributes.discount != 0 ? (
                  <span className="font-bold uppercase tracking-[0.8px] text-[10px] px-[8px] py-[4px] bg-[#3C9E00] rounded-[16px]">
                    {item.attributes.discount || ""}% OFF
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="text-[#b6b3b2] dallas_services_description mt-[12px] text-[14px] tracking-[0.28px]">
              <p>  {item.attributes.summary}</p>
              </div>
              <Link
                href={`/services/contact-us/${item.attributes.slug}`}
                className="text-[#FF7003] mt-[12px] font-medium text-[12px] tracking-[0.96px] uppercase"
              >
                Book Now
              </Link>
            </div>
          );
        })}
      </div>
    </Tabs.Content>
  );
};

export default ComputerTab;
