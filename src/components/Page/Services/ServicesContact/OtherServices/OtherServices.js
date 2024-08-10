import { ComputerSpec } from '@/db/Spec';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const lastThreeSpecs = ComputerSpec.slice(-3);
const OtherServices = () => {
  return (
    <div className='pt-20 pb-14'>
        <p className='text-[#FF7003] font-semibold text-[20px] mb-5'>Recommended Services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  align-middle place-content-between gap-[32px] gap-y-[60px]">
        {lastThreeSpecs.map((item, index) => {
          return (
            <div key={index} className="flex flex-col ">
              <div className='w-[50px] h-[50px]'>
              <Image width={50} height={50} src={item.image} alt="specific" />
              </div>
              <div className="inline-flex items-center gap-[10px] mt-[19px]">
                <p className="text-[14px]   text-[#fff]">{item.title}</p>
                {item.discountOffer != 0 ? (
                  <span className="font-bold uppercase tracking-[0.8px] text-[10px] px-[8px] py-[4px] bg-[#3C9E00] rounded-[16px]">
                    {item.discountOffer}% OFF
                  </span>
                ) : (
                  ""
                )}
              </div>
              <p className="text-[#b6b3b2] dallas_services_description mt-[12px] text-[14px] tracking-[0.28px]">
                {item.description}
              </p>
              <Link
                href={`/services/contact-us/${item.slug}`}
                className="text-[#FF7003] mt-[12px] font-medium text-[12px] tracking-[0.96px] uppercase"
              >
                Book Now
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default OtherServices