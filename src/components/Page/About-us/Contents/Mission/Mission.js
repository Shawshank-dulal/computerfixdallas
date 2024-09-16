import { fetchAboutMission } from '@/utils/about/about_mission'
import Image from 'next/image'
import React from 'react'

const Mission = async() => {
  const data=await fetchAboutMission()
  const items=data?.aboutmission?.data
  console.log("Connect for about",items)
  return (
    <div>
   {items ? <div>
    <div className="mx-auto ">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-[#c95701] sm:text-4xl">{items.attributes.title}</h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto flex flex-col gap-3">
          {items && items?.attributes?.description.map((item2, index2) => {
  return (
    <div key={index2}>
      {item2 && item2?.children.map((item3, index3) => {
        return (
          <p key={index3} className="text-[18px] leading-8 text-[#fff]">
            {item3?.text}
          </p>
        );
      })}
    </div>
  );
})}

            {/* <div className="mt-10 max-w-xl text-base leading-7 text-[#fff]">
              <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
              <p className="mt-10">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
            </div> */}
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {items && items?.attributes?.records.map((item4,index4)=>{
                return(
                  <div key={index4} className="flex flex-col-reverse gap-y-4">
                <dt className="text-base leading-7 text-[#fff]">{item4?.title}</dt>
                <dd className="text-5xl font-semibold tracking-tight text-[#c95701]">{item4?.values}</dd>
              </div>
                )
              })}
          
            </dl>
          </div>
        </div>
      </div>
    </div>


    <div className="mt-20 md:mt-32">
      <Image width={1200} height={1200} src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="" className="aspect-[5/2] w-full object-cover rounded-xl xl:rounded-3xl"/>
    </div>
    </div> : 'No data'}
    </div>
  )
}

export default Mission
