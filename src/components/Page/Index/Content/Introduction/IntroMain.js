import { fetchhomeintro } from "@/utils/homeintro";
import React from "react";
import Introduction from "./Introduction";

const IntroMain = async () => {
  const fetchData = await fetchhomeintro();
  const newData = fetchData?.homeintro?.data;
  console.log(newData);
  return (
    <>
      <div>
        <div
          className="absolute w-full bg-no-repeat bg-center bg-cover h-[756px] z-[-10] overflow-hidden"
          style={{
            backgroundImage: "url('/images/bg.svg')",
          }}
        ></div>

        <div className="main_container inside_sidespace  text-center flex flex-col justify-center items-center h-full pt-[12rem] pb-20">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center text-[14px]">
              <Link
                href="tel:+14693539236"
                className="max-w-fit px-[16px] py-[8px] rounded-[52px] flex items-center gap-2 justify-center text-[#FF7003] border border-[#FF700347]"
              >
                <FiPhone /> <p>+{newData.attributes.phone_number}</p>
              </Link>
            </div>

            <p className="font-medium mt-[16px] max-w-[632px] leading-[2.98rem] text-[32px] sm:text-[48px] tracking-tight">
              {newData.attributes.title}
            </p>

            <p className="mt-4 text-[17px] max-w-[522px] text-[#FFDCBF]">
              {newData.attributes.description}
            </p>

            <div className="mt-6 flex gap-6 items-center text-[16px]">
              <Link
                href="/contact-us?action=call"
                className="rounded-[52px] px-[20px] py-[10px]"
                style={{
                  background:
                    "linear-gradient(180deg, #D15A00 0%, #924104 134.15%)",
                }}
              >
                Book an Appointment
              </Link>
              <Link href="/contact-us?action=message">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroMain;
