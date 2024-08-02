import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";
import Image from 'next/image';
import { ComputerSpec } from '@/db/Spec';
const ComputerTab = () => {
  return (
    <Tabs.Content className="TabsContent1" value="computer">
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 align-middle place-content-between text-center gap-[28px] '>
        {ComputerSpec.map((item,index)=>{
            return(
                <div key={index} className='flex flex-col items-center'>
                <Image width={50} height={50} src={item.image} alt='specific'/>
                <p className='text-[14px] mt-[16px] text-[#FFE7D4]'>{item.title}</p>
            </div>
            )
        })}
      
    </div>
   </Tabs.Content>
  )
}

export default ComputerTab