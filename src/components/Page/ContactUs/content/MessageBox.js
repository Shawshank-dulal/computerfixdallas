"use client";
import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Form from "@radix-ui/react-form";

import Select from "react-select";
import {
  MdOutlineLocationOn,
  MdOutlineMailOutline,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "../contactus.css";

import "react-phone-input-2/lib/material.css";
import Loading from "./Loading";

import emailjs from "@emailjs/browser";
const MessageBox = ({ servicesData }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    services: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangePhone = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      phoneNumber: value,
    }));
  };

  const handleServiceChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map(option => option.value);
    setFormData(prevData => ({
      ...prevData,
      services: selectedValues
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      );
      console.log("EmailJS response:", res);

      if (res.status === 200) {
        // Reset the formData fields
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          company: "",
          // position: "",
          message: "",
        });
        setLoading(false);
        toast.success(
          "Thank you for reaching out! We will get back to you shortly."
        );
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log("EmailJS error:", error);
      toast.error("Please try again.");
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "black",
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#2E2E2E",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
  };

  const options = servicesData.map(item => ({
    label: item?.attributes?.title,
    value: item?.attributes?.title
  }));
  
  return (
 <div className="flex justify-between flex-wrap gap-5 md:flex-nowrap">
 
        <div className="">
          <span className="text-[28px] font-semibold uppercase">
            Get in touch
          </span>
          <p className="text-[#afafaf] my-3 text-[14px] max-w-[385px]">
            We'd love to hear from you! Whether you have questions, feedback, or
            just want to say hello, feel free to reach out. Contact us via
            email, phone, or through our social media channels. Our team is here
            to assist you and will get back to you as soon as possible.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mt-2  ">
              <MdOutlineMailOutline className="text-[18px] text-[#FF7003]" />
              <Link href="mailto:computerfixdallas@gmail.com">
                Send an email
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MdOutlinePhoneInTalk className="text-[18px] text-[#FF7003]" />
              <a href="tel:+1-469-353-9236">+1 469-353-9236</a>
            </div>
            <div className="flex items-center gap-2 mt-2 ">
              <MdOutlineLocationOn className="text-[20px] text-[#FF7003]" />
              <Link
                className="lg:max-w-[290px]"
                target="_blank"
                href="https://maps.app.goo.gl/ig4oZvtC9JhquJUs8?g_st=com.google.maps.preview.copy"
              >
                4925 Greenville Ave, Suite 200 Dallas Texas, 75206
              </Link>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.979094055555!2d-96.77022520000001!3d32.8458052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9f383375a19d%3A0x75fd3b21b72e938e!2sComputerFixDallas%20-%20Apple%20Mac%20Gaming%20PC%20Laptop%20iPhone%20iPad%20Repair%20and%20Data%20Recovery!5e0!3m2!1sen!2sus!4v1726328721439!5m2!1sen!2sus" 
          width="400" height="250" style={{border:"0" }} className="rounded-[4px] mt-6"
          allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

       

        <Form.Root
          onSubmit={handleSubmit}
          className="FormRoot max-w-[720px] md:max-w-[480px] mt-8 md:mt-0"
        >
          <Form.Field className="FormField" name="Full Name">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Full Name</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter your full name
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Please provide a valid full name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                value={formData.fullName}
                name="fullName"
                onChange={handleChange}
                className="Input"
                type="text"
                required
                placeholder="Enter your Full Name"
              />
            </Form.Control>
          </Form.Field>

        
          <Form.Field className="FormField" name="Work Email">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Work Email</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                value={formData.email}
                name="email"
                onChange={handleChange}
                className="Input"
                type="email"
                required
                placeholder="Enter your Email"
              />
            </Form.Control>
          </Form.Field>

          <Form.Field className="FormField formfield_phone" name="Phone Number">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel"> Phone Number</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Enter the Phone Number
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Please provide a valid number
              </Form.Message>
            </div>

            <PhoneInput
              country={"us"}
              onlyCountries={["us"]}
              value={formData.phoneNumber}
              name="phoneNumber"
              onChange={handleChangePhone}
              className="text-black bg-black"
            />
          </Form.Field>

       
 <div className="formfield_select">
                <label>Select the services you need</label>
               <Select
  placeholder="Select the services"
  value={options.filter(option =>
    (formData.services || []).includes(option.value) // Ensure services is an array
  )}
  styles={customStyles}
  className="mt-3 border-[#FF7003] rounded-[16px] bg-black text-black"
  name="service"
  isMulti
  options={options}
  onChange={handleServiceChange}
/>

              </div>
            

          <Form.Field className="FormField" name="question">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Message or Comment</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter a message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea
                value={formData.message}
                name="message"
                onChange={handleChange}
                className="Textarea"
                required
              />
            </Form.Control>
          </Form.Field>

          <Form.Submit asChild>
            <button
              type="submit"
              className="text-[#fff] cursor-pointer text-[14px] font-semibold w-full text-center py-2 rounded-[6px] mt-[4px]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(217, 217, 217, 0.01), rgba(217, 217, 217, 0.01)),linear-gradient(180deg, #D15A00 0%, #924104 134.15%)",
              }}
              disabled={loading}
            >
              {!loading ? "Send Message" : "Loading ..."}
            </button>
          </Form.Submit>
        </Form.Root>

 
 </div>
  );
};

export default MessageBox;
