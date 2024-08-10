import React from "react";
import TypeDetails from "./TypeDetails/TypeDetails";
import ContactForm from "./ContactForm/ContactForm";
import Faq from "../../Index/Content/Faq/Faq";
import OtherServices from "./OtherServices/OtherServices";

const ServicesContact = ({serviceSlug}) => {
  return (
    <div>
      <div
        className=" w-full bg-no-repeat bg-center  bg-cover h-[500px] z-[-100] overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg/1.svg')",
          boxShadow: "rgba(0, 0, 0, 0.55) 0px -100px 36px -28px inset"
        }}
      ></div>

      <div className="main_container inside_sidespace ">
     <div className="flex justify-between flex-wrap md:flex-nowrap gap-2 md:gap-8">
     <TypeDetails serviceSlug={serviceSlug}/>
     <ContactForm serviceSlug={serviceSlug}/>
   
     </div>
     <OtherServices/>
     <Faq/>
      </div>
    </div>
  );
};

export default ServicesContact;
