import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./style.css";
import ComputerTab from "./ContentTab/ComputerTab";

import { fetchServices } from "@/utils/services";
import Image from "next/image";
import config from "@/config";
import { fetchTabCategoriesData } from "@/utils/tabcategories";

const Specification = async() => {
  const tabcategoriesData=await fetchTabCategoriesData()
  const tabcategories=tabcategoriesData?.tabcategories?.data
  // console.log("New tab data",tabcategories)

  const servicesData = await fetchServices();
  const services=servicesData?.services?.data
  // console.log("New tab Service",services[0].attributes?.tabcategory?.data)

  return (
    <div className="main_container inside_sidespace  py-20">
      {tabcategories.length > 0 && services.length > 0 ?
      <Tabs.Root className="TabsRoot1 mt-8 md:mt-0" defaultValue={tabcategories[0].attributes?.title}>
        <Tabs.List className="TabsList1 " aria-label="Manage your account">
        {tabcategories && tabcategories.map((item,index)=>{
            return(
              <Tabs.Trigger key={index} className="TabsTrigger1" value={item?.attributes?.title}>
              {item?.attributes?.title}
            </Tabs.Trigger>

            )
          })}
        </Tabs.List>

        {tabcategories && tabcategories.map((item5,index5)=>{
            return(
        <Tabs.Content key={index5} className="TabsContent1" value={item5?.attributes?.title}>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 align-middle place-content-between text-center gap-[28px] '>

          {services && services.filter(item3=>item3?.attributes?.tabcategory?.data?.attributes?.title === item5.attributes.title).map((item2,index)=>{
          return(
            <div key={index} className='flex flex-col items-center'>
                <Image width={50} height={50} src={`${config.api}${item2?.attributes?.image?.data?.attributes?.url}`} alt='specific'/>
                <p className='text-[14px] mt-[16px] text-[#FFE7D4]'>{item2?.attributes?.title}</p>
                {/* {item2.attributes.tabcategory.data === null ? "no data" : item2.attributes.tabcategory.data.attributes.title}          */}
            </div>
          
          )
        })}
        </div>

        </Tabs.Content>
            )})}

     
      </Tabs.Root>:'No data'}
  
    </div>
  );
};

export default Specification;
