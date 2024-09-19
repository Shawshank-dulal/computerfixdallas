import config from "@/config";
import { fetchservicemessage } from "@/utils/servicemessage";
import Image from "next/image";
import React from "react";

const AwardSupport = async() => {
  const fetchData=await fetchservicemessage()
  const data=fetchData?.servicemessage?.data
  console.log("New tab data message",data)


  return (
    <div>

      <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8 ">
        <div className="relative isolate overflow-hidden bg-[#332e2e13]  px-6 py-24  shadow-2xl sm:rounded-3xl sm:px-16">
        {data ? <div className="flex justify-between gap-10 items-center flex-wrap md:flex-nowrap">
            <Image
              width={350}
              height={350}
              src= {`${config.api}${data?.attributes?.image?.data?.attributes?.url}`}
              alt="image"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[#ffff] text-[16px] font-semibold">
                {data?.attributes?.slogan}
              </p>
              <p className="text-[#ffff] text-[28px] font-semibold">
              {data?.attributes?.title}
              </p>
              <p className="text-[#ffff] text-[16px] font-medium">
              {data?.attributes?.description}
              </p>
              {/* <div className="mt-2">
                <button className="font-semibold border border-[#ffff] text-[#ffff] px-4 py-1 rounded-[4px]">
                  Visit the help center
                </button>
              </div> */}
            </div>
          </div> : 'No data'}
          <div
            className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#c95701] to-[#4d280c] opacity-85"
              style={{clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"}}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardSupport;
