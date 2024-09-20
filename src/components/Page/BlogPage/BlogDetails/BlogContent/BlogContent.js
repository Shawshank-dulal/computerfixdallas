import React from 'react'
import './style.css'
const BlogContent = ({data}) => {
  return (
    <div className='main_container blog_container_content inside_sidespace'>
      {data?.attributes?.content  ? 
     <div>
         <p>{data?.attributes?.description && data?.attributes?.description}</p>
    <div className='mt-5'>
    {data?.attributes?.content && data?.attributes?.content.map((item3, index3) => {
                  return <p key={index3}>{item3?.children[0]?.text}</p>;
                })}
    </div>

   
<div className='my-10 text-[#EF6700] border border-[#ff70031f] bg-[#150900] text-[16px] font-semibold tracking-tight px-6 py-4 rounded-[8px]'>{data && data?.attributes?.slogan}

</div>
   <div className='mt-5'>
   {data?.attributes?.end_description && data?.attributes?.end_description.map((item4, index4) => {
                  return <p key={index4}>{item4?.children[0]?.text}</p>;
                })}
   </div>
     </div>
   :''}
    </div>
  )
}

export default BlogContent