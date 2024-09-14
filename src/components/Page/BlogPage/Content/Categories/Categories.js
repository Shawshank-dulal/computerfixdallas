import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";
import './style.css'
import Blogs from '../BlogItems/Blogs';

const Categories = () => {
  return (
    <div className='main_container inside_sidespace  py-6'>
         {/* <Tabs.Root className="TabsRoot2 " defaultValue='all'>
      <Tabs.List
        className="TabsList2 "
        aria-label="Manage your account"
      >
        <Tabs.Trigger className="TabsTrigger2 " value="all">
          All
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger2 " value="virus">
        Virus
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger2 " value="repair">
          Repair
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger2" value="replacement">
        Replacement
        </Tabs.Trigger>
      </Tabs.List>
    

      <Tabs.Content className="TabsContent2" value="all">
       <Blogs/>
      </Tabs.Content>
      <Tabs.Content className="TabsContent2" value="virus">
       <p className='text-[32px]'>Coming Soon...</p>
      </Tabs.Content>
      <Tabs.Content className="TabsContent2" value="repair">
       <p className='text-[32px]'>Coming Soon...</p>
      </Tabs.Content>
      <Tabs.Content className="TabsContent2" value="replacement">
       <p className='text-[32px]'>Coming Soon...</p>
      </Tabs.Content>
    </Tabs.Root> */}
       <Blogs/>
    </div>
  )
}

export default Categories