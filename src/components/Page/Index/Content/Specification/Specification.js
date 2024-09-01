import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./style.css";
import ComputerTab from "./ContentTab/ComputerTab";
import { fetchTabCategroies } from "@/utils/tabcategories";
import { fetchServices } from "@/utils/services";

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
        
        <Tabs.Content className="TabsContent1" value="Computer">
        {services.map((item,index)=>{
          return(
            <div>
              {item.attributes.tabcategory.data === null ? "no data" : item.attributes.tabcategory.data.attributes.title}
            </div>
          )
        })}
             {/* {item.attributes.tab_category.data.map((item2,index)=>{
                  return(
                    <p>aaaaa</p>
                  )
                })} */}
        <ComputerTab />
        </Tabs.Content>
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
