import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import './faq.css'
import { FaAngleDown } from 'react-icons/fa';
import { fetchfaqs } from '@/utils/faqs';


const FaqContent = async() => {
  const faqsData=await fetchfaqs()
  const allFaqs=faqsData?.faqs?.data
  console.log('new data',faqsData)

  if(!allFaqs){
    <p>No data</p>
  }
  return (
    <Accordion.Root className="AccordionRoot  mt-[1.5rem] md:mt-[2rem]" type="single" defaultValue="item-1" collapsible>
    {allFaqs && allFaqs.map((item,index)=>{
      return(
       
        <Accordion.Item key={index} className="AccordionItem" value={`item-${item.id}`}>
        <Accordion.Trigger className="AccordionTrigger text-[16px] md:text-[18px]">
          {item.attributes.question}
        <div className='FaAngleDown'><FaAngleDown className="text-[14px] FaAngleDown"/></div>
         </Accordion.Trigger>
        
        <Accordion.Content className="AccordionContent text-[15px] md:text-[16px]"> 
        <div className="AccordionContentText text-[#FFE7D4]">
           {item.attributes.answer}
          </div>
          </Accordion.Content>
    
      </Accordion.Item>
      )
    })}
   
  
    
  </Accordion.Root>
  )
}

export default FaqContent