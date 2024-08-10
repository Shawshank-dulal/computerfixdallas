import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import { ComputerSpec } from "@/db/Spec";
import Link from "next/link";
const ComputerTab = () => {
  return (
    <Tabs.Content className="TabsContent1" value="computer">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  align-middle place-content-between gap-[32px] gap-y-[60px]">
        {ComputerSpec.map((item, index) => {
          return (
            <div key={index} className="flex flex-col ">
              <Image width={50} height={50} src={item.image} alt="specific" />
              <div className="inline-flex items-center gap-[10px] mt-[19px]">
                <p className="text-[14px]   text-[#fff]">{item.title}</p>
                {item.discountOffer != 0 ? (
                  <span className="font-bold uppercase tracking-[0.8px] text-[10px] px-[8px] py-[4px] bg-[#3C9E00] rounded-[16px]">
                    {item.discountOffer}% OFF
                  </span>
                ) : (
                  ""
                )}
              </div>
              <p className="text-[#b6b3b2] mt-[12px] text-[14px] tracking-[0.28px]">
                {item.description}
              </p>
              <Link
                href="#"
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
