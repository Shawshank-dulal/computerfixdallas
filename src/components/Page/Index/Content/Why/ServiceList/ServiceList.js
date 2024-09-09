import config from '@/config'
import { fetchWhyContents } from '@/utils/whycontents'
import React from 'react'

const ServiceList = async() => {
    const whydata=await fetchWhyContents()
    const info=whydata?.whycontents?.data
    // console.log('Why content Details:',info)
  return (
    <div className='flex gap-4 lg:gap-6 flex-wrap mt-16'>
      {info && info.map((item, index) => {
  return (
    <div key={index} className="md:max-w-[1010px] ">
      <div>
        <div className=" blogs_product_container">
          <div
            className="min-h-[292px]  relative bg-no-repeat bg-cover rounded-lg flex flex-col  justify-end"
            style={{
              backgroundImage: `url(${config.api}${item?.attributes?.image?.data?.attributes?.url})`,
            }}
          >
            <div className=" bg-[#100600d5] text-[16px] h-full px-[15px] py-[11px] m-2 rounded-[8px]">
              <p className="  font-medium text-[#FF6E00]">
              {item?.attributes?.title || ''}
              </p>
              <p> {item?.attributes?.summary || ''}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})}
    </div>
  )
}

export default ServiceList
