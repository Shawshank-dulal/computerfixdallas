"use client"
import React, { useState } from "react";

import * as Form from "@radix-ui/react-form";


import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "./contactus.css";

import "react-phone-input-2/lib/material.css";
import Loading from "@/components/Page/ContactUs/content/Loading";
import { ComputerSpec } from "@/db/Spec";

const ContactForm = ({serviceSlug,servicesData2}) => {
    const [loading, setLoading] = useState(false); // Add loading state
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phoneNumber: "",
      issue: "",
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
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("formData", formData);
      setLoading(true); // Set loading to true
  
      try {
        const res = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formData,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
        );
        console.log("EmailJS response:", res);
        if (res.status === 200) {
          toast.success(
            "Thank you for reaching out! We will get back to you shortly."
          );
  
          // Reset the formData fields
          setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            issue: "",
            message: "",
          });
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      } catch (error) {
        console.log("EmailJS error:", error);
        toast.error("Please try again.");
      } finally {
        setLoading(false); // Set loading to false after submission
      }
    };
  
  return (
    <div>
           {!loading ? (
          <>
            <Form.Root className="FormRoot1 max-w-[650px] pb-16 md:pb-0 md:mt-4" onSubmit={handleSubmit}>
              <Form.Field className="FormField1" name="full name">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel1">Full Name</Form.Label>
                  <Form.Message className="FormMessage1" match="valueMissing">
                    Please enter your full name
                  </Form.Message>
                  <Form.Message className="FormMessage1" match="typeMismatch">
                    Please provide a valid full name
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    value={formData.fullName}
                    name="fullName"
                    onChange={handleChange}
                    className="Input1"
                    type="text"
                    required
                    placeholder="Enter your Full Name"
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field className="FormField1" name="email">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel1">Email</Form.Label>
                  <Form.Message className="FormMessage1" match="valueMissing">
                    Please enter your email
                  </Form.Message>
                  <Form.Message className="FormMessage1" match="typeMismatch">
                    Please provide a valid email
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    className="Input1"
                    type="email"
                    required
                    placeholder="Enter your Email"
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field className="FormField1" name="phonenumber">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel1">Phone Number</Form.Label>
                  <Form.Message className="FormMessage1" match="valueMissing">
                    Enter the Phone Number
                  </Form.Message>
                  <Form.Message className="FormMessage1" match="typeMismatch">
                    Please provide a valid number
                  </Form.Message>
                </div>

                <PhoneInput
                  country={"us"}
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChangePhone}
                  className="text-black bg-black"
                />
              </Form.Field>


              {servicesData2
        .filter((item) => item?.id == serviceSlug)
        .map((item2, index2) => {
          return (
                <div key={index2} className="flex flex-col ">
                 <Form.Field className="FormField1" name="Product Type">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel1">I would Like To Repair My</Form.Label>
                  <Form.Message className="FormMessage1" match="valueMissing">
                    Please enter your Product Type
                  </Form.Message>
                  <Form.Message className="FormMessage1" match="typeMismatch">
                    Please provide a valid Product Type
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    value={item2.attributes.title}
                    name="fullName"
                    onChange={handleChange}
                    className="Input1"
                    type="text"
                    required disabled
                    placeholder="I would Like To Repair My"
                  />
                </Form.Control>
              </Form.Field>
               
              </div>
            )
        })}

             

             
              <Form.Field className="FormField1" name="question">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
             
                  <Form.Label className="FormLabel1">Your Message or Feedback</Form.Label>
                  <Form.Message className="FormMessage1" match="valueMissing">
                    Please enter a message
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <textarea placeholder="Your Message or Feedback"
                    value={formData.message}
                    name="message"
                    onChange={handleChange}
                    className="Textarea1"
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
                 }}>
                  Send Message
                </button>
              </Form.Submit>
            </Form.Root>
          </>
        ) : (
          <Loading />
        )}
    </div>
  )
}

export default ContactForm