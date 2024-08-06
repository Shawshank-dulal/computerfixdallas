"use client";
import React from "react";
import "./contactus.css";
import Image from "next/image";
import MessageBox from "./content/MessageBox";
import { useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Introduction from "./content/Introduction/Introduction";
const ContactUs = () => {
  const searchParams = useSearchParams();
  const paramsData = searchParams.get("action");
  console.log("title", paramsData);
  return (

      <div className="main_container inside_sidespace ">
        <Introduction/>
        <MessageBox selectTab={paramsData} />
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
