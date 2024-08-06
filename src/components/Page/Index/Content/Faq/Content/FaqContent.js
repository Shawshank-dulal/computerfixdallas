"use client"
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import './faq.css'
import { FaqData } from '@/db/FaqData';
import { FaAngleDown } from 'react-icons/fa';
const FaqContent = () => {
  return (
    <Accordion.Root className="AccordionRoot  mt-[1.5rem] md:mt-[2rem]" type="single" defaultValue="item-1" collapsible>
    {FaqData.map((item,index)=>{
      return(
       
        <Accordion.Item key={index} className="AccordionItem" value={`item-${item.number}`}>
        <Accordion.Trigger className="AccordionTrigger text-[16px] md:text-[18px]">
          {item.question}
        <div className='FaAngleDown'><FaAngleDown className="text-[14px] FaAngleDown"/></div>
         </Accordion.Trigger>
        
        <Accordion.Content className="AccordionContent text-[15px] md:text-[16px]"> 
        <div className="AccordionContentText text-[#FFE7D4]">
           {item.answer}
          </div>
          </Accordion.Content>
    
      </Accordion.Item>
      )
    })}
   
  
    
  </Accordion.Root>
  )
}

export default FaqContent