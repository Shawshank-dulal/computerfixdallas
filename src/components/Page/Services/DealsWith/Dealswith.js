"use client"
import React, { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import './style.css'

import { fetchServices } from '@/utils/services';
import Image from "next/image";
import config from '@/config';
import Link from 'next/link';
import { fetchTabCategoriesData } from '@/utils/tabcategories';

const Dealswith = () => {
  const [tabcategories, setTabcategories] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");

  // Fetch Tab Categories on Mount
  useEffect(() => {
    const fetchTabCategories = async () => {
      const tabcategoriesData = await fetchTabCategoriesData();
      const tabs = tabcategoriesData?.tabcategories?.data || [];
      setTabcategories(tabs);

      // Set the default tab as the first category if available
      if (tabs.length > 0) {
        setSelectedTab(tabs[0].attributes.title);
      }
    };
    
    fetchTabCategories();
  }, []);

  // Fetch Services when selectedTab changes
  useEffect(() => {
    if (selectedTab) {
      const fetchData = async () => {
        const servicesData = await fetchServices(selectedTab.toLowerCase());
        setServices(servicesData?.services?.data || []);
      };
      fetchData();
    }
  }, [selectedTab]);

  return (
    <div className="main_container inside_sidespace py-20">
      {tabcategories.length > 0 ? (
        <Tabs.Root
          className="TabsRoot22 mt-8 md:mt-0"
          defaultValue={tabcategories[0]?.attributes?.title}
          onValueChange={(value) => setSelectedTab(value)} // Update selected tab on change
        >
          <Tabs.List className="TabsList22" aria-label="Manage your account">
            {tabcategories.map((item, index) => (
              <Tabs.Trigger key={index} className="TabsTrigger22" value={item?.attributes?.title}>
                {item?.attributes?.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {tabcategories.map((item, index) => (
            <Tabs.Content key={index} className="TabsContent22" value={item?.attributes?.title}>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  align-middle place-content-between gap-[32px] md:gap-y-[60px]'>
          {services
                  .filter(service => service.attributes?.tabcategory?.data?.attributes?.title === item?.attributes?.title)
                  .map((service, index) => (
                    <div key={index} className="flex flex-col ">
                    <Link
                  href={`/services/contact-us/${service?.attributes?.slug}`}
                >
                <div className="w-[65px] h-[65px]">
                  <Image
                    width={65}
                    height={65}
                    src={`${config.api}${service?.attributes?.icon?.data?.attributes?.url}`}
                    alt="specific"
                  />
                </div>
                <div className="inline-flex items-center gap-[10px] mt-[19px]">
                  <p className="text-[14px]   text-[#fff]">
                    {service?.attributes?.title}
                  </p>
                  {service?.attributes?.discount != 0 ? (
                    <span className="font-bold uppercase tracking-[0.8px] text-[10px] px-[8px] py-[4px] bg-[#3C9E00] rounded-[16px]">
                      {service?.attributes?.discount || ""}% OFF
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-[#b6b3b2] dallas_services_description mt-[12px] text-[14px] tracking-[0.28px]">
                <p>  {service?.attributes?.summary}</p>
                </div>
                <div
                  href={`/services/contact-us/${service?.attributes?.slug}`}
                  className="text-[#FF7003] mt-[12px] font-medium text-[12px] tracking-[0.96px] uppercase"
                >
                  Book Now
                </div></Link>
              </div>
                  ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Dealswith