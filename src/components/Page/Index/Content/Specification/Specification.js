import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";
import './style.css'
import ComputerTab from './ContentTab/ComputerTab';
const Specification = () => {
  return (
    <div className='main_container inside_sidespace  py-20'>
         <Tabs.Root className="TabsRoot1 mt-8 md:mt-0" defaultValue='computer'>
      <Tabs.List
        className="TabsList1 "
        aria-label="Manage your account"
      >
        <Tabs.Trigger className="TabsTrigger1 " value="computer">
          Computer
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger1 " value="macbook">
          Macbook
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger1 " value="imac">
          iMac
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger1" value="iphone">
          iPhone
        </Tabs.Trigger>
      </Tabs.List>
   
        <ComputerTab/>

      <Tabs.Content className="TabsContent1" value="macbook">
       <p className='text-[32px]'>Coming Soon...</p>
      </Tabs.Content>
      <Tabs.Content className="TabsContent1" value="imac">
       <p className='text-[32px]'>Coming Soon...</p>
      </Tabs.Content>
      <Tabs.Content className="TabsContent1" value="iphone">
       <p className='text-[32px]'>Coming Soon...</p>
      </Tabs.Content>
    </Tabs.Root>
    </div>
  )
}

export default Specification