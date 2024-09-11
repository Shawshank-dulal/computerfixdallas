import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";
import './style.css'
import ComputerTab from './ContentTab/ComputerTab';
import { fetchTabCategroies } from '@/utils/tabcategories';
import { fetchServices } from '@/utils/services';
import Image from "next/image";
import config from '@/config';
import Link from 'next/link';

const Dealswith = async() => {
    const tabcategoriesData=await fetchTabCategroies()
  const tabcategories=tabcategoriesData?.tabcategories?.data
  console.log("New tab data",tabcategories)

  const servicesData = await fetchServices();
  const services=servicesData?.services?.data
  // console.log("New tab Service",services)

  return (

<>

{tabcategories.length > 0 && services.length > 0 ?
  <Tabs.Root className="main_container inside_sidespace TabsRoot22 mt-8 md:mt-4 " defaultValue={tabcategories[0]?.attributes?.title}>
    <Tabs.List className="TabsList22 mb-24" aria-label="Manage your account">
    {tabcategories && tabcategories.map((item,index)=>{
        return(
          <Tabs.Trigger key={index} className="TabsTrigger22" value={item?.attributes?.title}>
          {item?.attributes?.title}
        </Tabs.Trigger>

        )
      })}
    </Tabs.List>

    {tabcategories && tabcategories.map((item5,index5)=>{
        return(
    <Tabs.Content key={index5} className="TabsContent22" value={item5?.attributes?.title}>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  align-middle place-content-between gap-[32px] gap-y-[60px]'>

      {services && services.filter(item3=>item3?.attributes?.tabcategory?.data?.attributes?.title === item5?.attributes?.title).map((item2,index)=>{
      return(
        <div key={index} className="flex flex-col ">
        <div className="w-[50px] h-[50px]">
          <Image
            width={50}
            height={50}
            src={`${config.api}${item2?.attributes?.image?.data?.attributes?.url}`}
            alt="specific"
          />
        </div>
        <div className="inline-flex items-center gap-[10px] mt-[19px]">
          <p className="text-[14px]   text-[#fff]">
            {item2?.attributes?.title}
          </p>
          {item2?.attributes?.discount != 0 ? (
            <span className="font-bold uppercase tracking-[0.8px] text-[10px] px-[8px] py-[4px] bg-[#3C9E00] rounded-[16px]">
              {item2?.attributes?.discount || ""}% OFF
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="text-[#b6b3b2] dallas_services_description mt-[12px] text-[14px] tracking-[0.28px]">
        <p>  {item2?.attributes?.summary}</p>
        </div>
        <Link
          href={`/services/contact-us/${item2?.attributes?.slug}`}
          className="text-[#FF7003] mt-[12px] font-medium text-[12px] tracking-[0.96px] uppercase"
        >
          Book Now
        </Link>
      </div>
      
      )
    })}
    </div>

    </Tabs.Content>
        )})}

 
  </Tabs.Root>:'No data'}
  </>
  )
}

export default Dealswith