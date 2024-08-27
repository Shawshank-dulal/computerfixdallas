import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";
import Image from 'next/image';
import { ComputerSpec } from '@/db/Spec';
import { fetchServices } from '@/utils/services';
import config from '@/config';
const ComputerTab = async() => {
  const servicesData = await fetchServices();
  const services=servicesData.services.data
  console.log(servicesData.services);
  return (
    <Tabs.Content className="TabsContent1" value="computer">
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 align-middle place-content-between text-center gap-[28px] '>
        {services.map((item,index)=>{
            return(
                <div key={index} className='flex flex-col items-center'>
                <Image width={50} height={50} src={`${config.api}${item.attributes.image.data.attributes.url}`} alt='specific'/>
                <p className='text-[14px] mt-[16px] text-[#FFE7D4]'>{item.attributes.title}</p>
            </div>
            )
        })}
      
    </div>
   </Tabs.Content>
  )
}

export default ComputerTab