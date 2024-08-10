import { ComputerSpec } from '@/db/Spec'
import Image from 'next/image'
import React from 'react'

const TypeDetails = ({serviceSlug}) => {

  return (
    <div className='relative top-[-6.99rem] md:max-w-[550px]'>
        {ComputerSpec.filter(item=>item.slug === serviceSlug).map((item2,index2)=>{
            return(
                <div key={index2} className="flex flex-col ">
                <Image width={50} height={50} src={item2.image} alt="specific" />
                <div className="inline-flex items-center gap-[10px] mt-[19px]">
                  <p className="text-[32px] font-bold tracking-[0.64px]  text-[#fff]">{item2.title}</p>
                  {item2.discountOffer != 0 ? (
                    <span className="font-bold uppercase tracking-[0.8px] text-[12px] px-[8px] py-[4px] bg-[#3C9E00] rounded-[16px]">
                      {item2.discountOffer}% OFF
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <p className="text-[#cfcfcf]  mt-[12px] text-[16px] tracking-[0.32px] leading-snug">
                  {item2.description}
                </p>
               
              </div>
            )
        })}
    </div>
  )
}

export default TypeDetails