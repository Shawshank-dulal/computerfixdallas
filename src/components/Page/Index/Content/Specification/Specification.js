import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./style.css";
import ComputerTab from "./ContentTab/ComputerTab";
import { fetchTabCategroies } from "@/utils/tabcategories";
import { fetchServices } from "@/utils/services";
import Image from "next/image";
import config from "@/config";

const Specification = async() => {
  const tabcategoriesData=await fetchTabCategroies()
  const tabcategories=tabcategoriesData.tabcategories.data
  console.log("New tab data",tabcategories)

  const servicesData = await fetchServices();
  const services=servicesData.services.data
  return (
    <div className="main_container inside_sidespace  py-20">
      <Tabs.Root className="TabsRoot1 mt-8 md:mt-0" defaultValue={tabcategories[0].attributes.title}>
        <Tabs.List className="TabsList1 " aria-label="Manage your account">
        {tabcategories.map((item,index)=>{
            return(
              <Tabs.Trigger key={index} className="TabsTrigger1 " value={item.attributes.title}>
              {item.attributes.title}
            </Tabs.Trigger>

            )
          })}
          {/* <Tabs.Trigger className="TabsTrigger1 " value="computer">
            Computer
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger1 " value="macbook">
            Macbook
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger1 " value="imac">
            iMac
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger1" value="iphone">
            iPhone
          </Tabs.Trigger> */}
        </Tabs.List>
        {tabcategories.map((item,index)=>{
            return(
        <Tabs.Content className="TabsContent1" value={item.attributes.title}>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 align-middle place-content-between text-center gap-[28px] '>

          {services.filter(item3=>item3.attributes.tabcategory.data?.attributes?.title === item.attributes.title).map((item2,index)=>{
          return(
            <div key={index} className='flex flex-col items-center'>
                <Image width={50} height={50} src={`${config.api}${item2.attributes.image.data.attributes.url}`} alt='specific'/>
                <p className='text-[14px] mt-[16px] text-[#FFE7D4]'>{item2.attributes.title}</p>
                {item2.attributes.tabcategory.data === null ? "no data" : item2.attributes.tabcategory.data.attributes.title}         
            </div>
          
          )
        })}
        </div>

        {/* {services.map((item2,index)=>{
          return(
            <div>
              {item2.attributes.tabcategory.data === null ? "no data" : item2.attributes.tabcategory.data.attributes.title}
            </div>
          )
        })} */}
             {/* {item.attributes.tab_category.data.map((item2,index)=>{
                  return(
                    <p>aaaaa</p>
                  )
                })} */}
        {/* <ComputerTab /> */}
        </Tabs.Content>
            )})}
        <Tabs.Content className="TabsContent1" value="macbook">
          <p className="text-[32px]">Coming Soon...</p>
        </Tabs.Content>
        <Tabs.Content className="TabsContent1" value="imac">
          <p className="text-[32px]">Coming Soon...</p>
        </Tabs.Content>
        <Tabs.Content className="TabsContent1" value="iphone">
          <p className="text-[32px]">Coming Soon...</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Specification;
