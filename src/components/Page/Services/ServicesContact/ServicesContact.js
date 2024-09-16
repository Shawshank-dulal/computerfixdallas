import React from "react";
import TypeDetails from "./TypeDetails/TypeDetails";
import ContactForm from "./ContactForm/ContactForm";
import Faq from "../../Index/Content/Faq/Faq";
import OtherServices from "./OtherServices/OtherServices";
import { fetchServices, fetchServicesPage } from "@/utils/services";
import config from "@/config";
import Image from "next/image";

const ServicesContact = async({serviceSlug}) => {
  const servicesData = await fetchServicesPage();
  const services = servicesData?.services?.data;

  if(!services){
    <p>No data</p>
  }
  return (
    <div>
        {services
        .filter((item) => item.attributes.slug === serviceSlug)
        .map((item2, index2) => {
          return (
  <div>
       <div
        className=" w-full bg-no-repeat bg-center drop-shadow-2xl  bg-cover h-[500px] z-[-100] overflow-hidden"
        style={{
          backgroundImage: `url(${config.api}${item2.attributes?.image?.data?.attributes?.url})`,
          boxShadow: "rgba(0, 0, 0, 0.65) 0px 0px 86px 88px inset"
        }}
      ></div>

      {/* <Image className="h-[500px]  object-cover image-box-shadow" priority={true} 
    
      width={5000} height={500}
      style={{ boxShadow: "rgba(0, 0, 0, 0.65) 0px 0px 86px 88px inset" }} 

      src={`${config.api}${item2.attributes?.image?.data?.attributes?.url}`}/>
     */}

  </div>
    );
  })}
      <div className="main_container inside_sidespace ">
     <div className="flex justify-between flex-wrap md:flex-nowrap gap-2 md:gap-8">
     <TypeDetails serviceSlug={serviceSlug}/>
     <ContactForm servicesData2={services} serviceSlug={serviceSlug}/>
   
     </div>
     <OtherServices/>
     <Faq/>
      </div>
    </div>
  );
};

export default ServicesContact;
