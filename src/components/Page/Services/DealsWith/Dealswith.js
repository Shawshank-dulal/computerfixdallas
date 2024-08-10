import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";
import './style.css'
import ComputerTab from './ContentTab/ComputerTab';
const Dealswith = () => {
  return (
    <Tabs.Root className="main_container inside_sidespace TabsRoot22 mt-8 md:mt-4" defaultValue='computer'>
    <Tabs.List
      className="TabsList22 mb-24"
      aria-label="Manage your account"
    >
      <Tabs.Trigger className="TabsTrigger22 " value="computer">
        Computer
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger22 " value="macbook">
        Macbook
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger22 " value="imac">
        iMac
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger22" value="iphone">
        iPhone
      </Tabs.Trigger>
    </Tabs.List>
 
      <ComputerTab/>

    <Tabs.Content className="TabsContent22" value="macbook">
     <p className='text-[32px]'>Coming Soon...</p>
    </Tabs.Content>
    <Tabs.Content className="TabsContent22" value="imac">
     <p className='text-[32px]'>Coming Soon...</p>
    </Tabs.Content>
    <Tabs.Content className="TabsContent22" value="iphone">
     <p className='text-[32px]'>Coming Soon...</p>
    </Tabs.Content>
  </Tabs.Root>
  )
}

export default Dealswith