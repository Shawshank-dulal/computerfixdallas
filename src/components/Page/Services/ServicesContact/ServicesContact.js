import React from "react";
import TypeDetails from "./TypeDetails/TypeDetails";
import ContactForm from "./ContactForm/ContactForm";
import Faq from "../../Index/Content/Faq/Faq";
import OtherServices from "./OtherServices/OtherServices";
import { fetchServices, fetchServicesPage, fetchSingleService } from "@/utils/services";
import config from "@/config";
import Image from "next/image";

const ServicesContact = async({serviceId}) => {
  const servicesData = await fetchSingleService(serviceId);
  const services = servicesData?.services?.data;
  console.log("Service types data",services)
  if(!services){
    <p>No data</p>
  }
  return (
    <div>

  <div>
       <div
        className=" w-full bg-no-repeat bg-center drop-shadow-2xl  bg-cover h-[500px] z-[-100] overflow-hidden"
        style={{
          backgroundImage: `url(${config.api}${services?.attributes?.image?.data?.attributes?.url})`,
          boxShadow: "rgba(0, 0, 0, 0.65) 0px 10px 86px 108px inset"
        }}
      ></div>



  </div>

      <div className="main_container inside_sidespace ">
     <div className="flex justify-between flex-wrap md:flex-nowrap gap-2 md:gap-8">
     <TypeDetails serviceId={services}/>
     <ContactForm servicesData2={services} serviceId={services}/>
   
     </div>
     <OtherServices/>
     <Faq/>
      </div>
    </div>
  );
};

export default ServicesContact;
