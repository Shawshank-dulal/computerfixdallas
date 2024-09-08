import { fetchAboutWhy } from '@/utils/about/about_why'
import React from 'react'

const WhyContent = async() => {
  const data=await fetchAboutWhy()
  const items=data?.aboutwhy?.data
  console.log("Why for about",items)
  return (
    <div>
     
    <div className="mx-auto mt-32 mb-20">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-[#c95701] sm:text-4xl">Why ProTechFix</h2>
        <p className="mt-6 text-lg leading-8 text-[#fff]">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {items && items.map((item,index)=>{
          return(
            <div key={index}>
          <dt className="font-semibold text-[#c95701]">{item?.attributes?.title}</dt>
          <dd className="mt-1 text-[#fff]">{item?.attributes?.description}</dd>
        </div>
          )
        })}
       
      </dl>
    </div>
    </div>
  )
}

export default WhyContent
