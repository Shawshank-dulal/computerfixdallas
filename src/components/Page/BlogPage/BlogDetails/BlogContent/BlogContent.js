import React from 'react'
import './style.css'
import Link from 'next/link';
const BlogContent = ({data}) => {
  return (
    <div className='main_container strapi_content_body blog_container_content inside_sidespace'>
    
    {data?.attributes?.content && data.attributes.content.map((item3, index3) => {
  return (
    <span key={index3}>
       {item3?.type=='heading' && item3?.level == 1 ? 
                           <h1>{item3?.children[0]?.text}</h1> :
                           item3?.type=='heading' && item3?.level == 2 ? 
                           <h2>{item3?.children[0]?.text}</h2> :
                           item3?.type=='heading' && item3?.level == 3 ? 
                           <h3>{item3?.children[0]?.text}</h3> :
                           item3?.type=='heading' && item3?.level == 4 ? 
                           <h4>{item3?.children[0]?.text}</h4> :
                           item3?.type=='heading' && item3?.level == 5 ? 
                           <h5>{item3?.children[0]?.text}</h5> :
                           item3?.type=='heading' && item3?.level == 6 ? 
                           <h6>{item3?.children[0]?.text}</h6>  : item3?.type === 'paragraph' ? (
        <p className='py-1'>
          {item3?.children?.map((child, childIndex) => {
            if (child?.type === 'text') {
              if (child?.bold) return <b key={childIndex}>{child?.text}</b>;
              if (child?.italic) return <i key={childIndex}>{child?.text}</i>;
              if (child?.underline) return <u key={childIndex}>{child?.text}</u>;
              if (child?.strikethrough) return <s key={childIndex}>{child?.text}</s>;
              return <span key={childIndex}>{child?.text}</span>;
            }
            if (child?.type === 'link') {
              return (
                <Link key={childIndex} href={child?.url}>
                  {child?.children[0].text}
                </Link>
              );
            }
            return null;
          })}
        </p>
      ) : item3?.type === 'list' && item3?.format === 'unordered' ? (
        <ul key={item3?.id}>
          {item3?.children?.map((listItem, itemIndex) => (
            <li key={itemIndex}>
              {listItem?.children.map((child, childIndex) => (
                <span key={childIndex}>{child?.text}</span>
              ))}
            </li>
          ))}
        </ul>
      ) : item3?.type === 'list' && item3?.format === 'ordered' ? (
        <ol key={item3?.id}>
          {item3?.children.map((olistItem, oitemIndex) => (
            <li key={oitemIndex}>
              {olistItem?.children.map((child, childIndex) => (
                <span key={childIndex}>{child?.text}</span>
              ))}
            </li>
          ))}
        </ol>
      ) : item3?.children[0]?.type === 'text' && item3?.children[0]?.text === '' ? (
        <p className='py-[2px]'></p>
      ) : null}

      

      
    </span>
  );
})}
<div className='my-10 text-[#EF6700] border border-[#ff70031f] bg-[#150900] text-[16px] font-semibold tracking-tight px-6 py-4 rounded-[8px]'>{data && data?.attributes?.slogan}
</div>

      {/* {data?.attributes?.content  ? 
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
   :''} */}
    </div>
  )
}

export default BlogContent