import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Form from "@radix-ui/react-form";
import Image from "next/image";
import Calendar from "./Calendar";

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

import emailjs from '@emailjs/browser';
const MessageBox = ({ selectTab }) => {
  const [loading, setLoading]=useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        company: "",
        // position: "",
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
    setLoading(true)
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
        setLoading(false)
        toast.success(
          "Thank you for reaching out! We will get back to you shortly."
        )
      }else{
        setLoading(false)
      }
    } catch (error) {
      console.log("EmailJS error:", error);
      toast.error("Please try again.");
    }
  };


  return (
    <Tabs.Root className="TabsRoot4 " defaultValue={`${selectTab}`}>
      <Tabs.List
        className="TabsList4 text-[24px] md:text-[32px]"
        aria-label="Manage your account"
      >
        <Tabs.Trigger className="TabsTrigger4 " value="message">
          Message
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger4" value="call">
        Book an Appointment
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content
        className="TabsContent4 flex justify-between flex-wrap gap-5 md:flex-nowrap"
        value="message"
      >
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
              <p>+1 469-353-9236</p>
            </div>
            <div className="flex items-center gap-2 mt-2 ">
              <MdOutlineLocationOn className="text-[20px] text-[#FF7003]" />
              <Link
                className="lg:max-w-[290px]"
                target="_blank"
                href="https://maps.app.goo.gl/av3ZSq2PMVLZfdsX7"
              >
                8500 N Stemmons Fwy Suite 5038  Dallas Texas 75247
              </Link>
            </div>
          </div>
        </div>
       
            {/* <Form.Root className="FormRoot max-w-[720px] md:max-w-[480px] mt-8 md:mt-0" onSubmit={handleSubmit}>
              <Form.Field className="FormField" name="Your full name">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
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

              <Form.Field className="FormField" name="email">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
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

              <Form.Field className="FormField" name="phonenumber">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Message className="FormMessage" match="valueMissing">
                    Enter the Phone Number
                  </Form.Message>
                  <Form.Message className="FormMessage" match="typeMismatch">
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

              <Form.Field className="FormField" name="Product Type">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your Product Type
                  </Form.Message>
                  <Form.Message className="FormMessage" match="typeMismatch">
                    Please provide a valid Product Type
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
                    placeholder="Enter your Product Type"
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field className="FormField" name="Your Service Type">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your Service Type
                  </Form.Message>
                  <Form.Message className="FormMessage" match="typeMismatch">
                    Please provide a valid Service Type
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
                    placeholder="Enter your Service Type"
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field className="FormField" name="question">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
             
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter a message
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <textarea placeholder="Your Message or Feedback"
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
                 }}>
                  Send Message
                </button>
              </Form.Submit>
            </Form.Root> */}

            <Form.Root onSubmit={handleSubmit} className="FormRoot max-w-[720px] md:max-w-[480px] mt-8 md:mt-0">
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

              <Form.Field className="FormField" name="Company Name">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel">Company Name</Form.Label>
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your Company
                  </Form.Message>
                  <Form.Message className="FormMessage" match="typeMismatch">
                    Please provide a valid name
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    value={formData.company}
                    name="company"
                    onChange={handleChange}
                    className="Input"
                    type="text"
                    required
                    placeholder="Enter your Company Name"
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

              <Form.Field className="FormField" name="Phone Number">
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
                  onlyCountries={['us']}
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChangePhone}
                  className="text-black bg-black"
                />
              </Form.Field>

            

            

              {/* <Form.Field className="FormField" name="Position">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel">Your Position</Form.Label>
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your position
                  </Form.Message>
                  <Form.Message className="FormMessage" match="typeMismatch">
                    Please provide a valid name
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    value={formData.position}
                    name="position"
                    onChange={handleChange}
                    className="Input"
                    type="text"
                    required
                    placeholder="Enter your Current Position"
                  />
                </Form.Control>
              </Form.Field> */}

              <Form.Field className="FormField" name="question">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel">
                    Message or Comment
                  </Form.Label>
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
                  type="submit" className="text-[#fff] cursor-pointer text-[14px] font-semibold w-full text-center py-2 rounded-[6px] mt-[4px]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(217, 217, 217, 0.01), rgba(217, 217, 217, 0.01)),linear-gradient(180deg, #D15A00 0%, #924104 134.15%)",
                  }}    disabled={loading}
                >
                  {!loading ? "Send Message" : "Loading ..."}
                </button>
              </Form.Submit>
            </Form.Root>
        

    
      </Tabs.Content>

      <Tabs.Content className="TabsContent4" value="call">
        <Calendar />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default MessageBox;
