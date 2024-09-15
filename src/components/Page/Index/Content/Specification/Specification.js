"use client"
import React, { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./style.css";
import Image from "next/image";
import config from "@/config";
import { fetchServices } from "@/utils/services"; // Adjust based on your file structure
import { fetchTabCategoriesData } from "@/utils/tabcategories"; // Adjust based on your file structure


const Specification = () => {
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
          className="TabsRoot1 mt-8 md:mt-0"
          defaultValue={tabcategories[0]?.attributes?.title}
          onValueChange={(value) => setSelectedTab(value)} // Update selected tab on change
        >
          <Tabs.List className="TabsList1" aria-label="Manage your account">
            {tabcategories.map((item, index) => (
              <Tabs.Trigger key={index} className="TabsTrigger1" value={item?.attributes?.title}>
                {item?.attributes?.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {tabcategories.map((item, index) => (
            <Tabs.Content key={index} className="TabsContent1" value={item?.attributes?.title}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 align-middle place-content-between text-center gap-[28px]">
                {services
                  .filter(service => service.attributes?.tabcategory?.data?.attributes?.title === item?.attributes?.title)
                  .map((service, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <Image
                        width={50}
                        height={50}
                        src={`${config.api}${service.attributes?.icon?.data?.attributes?.url}`}
                        alt="service"
                      />
                      <p className="text-[14px] mt-[16px] text-[#FFE7D4]">{service.attributes?.title}</p>
                    </div>
                  ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      ) : (
        "No data"
      )}
    </div>
  );
};

export default Specification;
