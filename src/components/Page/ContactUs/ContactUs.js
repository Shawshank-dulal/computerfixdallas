import React from "react";
import "./contactus.css";
import Image from "next/image";
import MessageBox from "./content/MessageBox";
import toast, { Toaster } from "react-hot-toast";
import Introduction from "./content/Introduction/Introduction";
import { fetchServices, fetchServicesPage } from "@/utils/services";

const ContactUs = async() => {
  const servicesData = await fetchServicesPage();
  const services=servicesData?.services?.data
  return (

      <div className="main_container inside_sidespace ">
        <Introduction/>
        <MessageBox servicesData={services}/>
        
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontSize: "14px",
              fontWeight: "600",
              background: "#fff",
            },
          }}
        />
      </div>

  );
};

export default ContactUs;
