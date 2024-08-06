"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import "./style.css";

const NewsletterForm = ({ contentType, contentTitle, contentCategory }) => {
  console.log("slug title", contentType);
  const [formData, setFormData] = useState({
    FNAME: "",
    LName: "",
    EMAIL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT}`,
  //       {
  //         mode:'no-cors',
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );
  //     console.log("Form Data ",formData)
  //     if (res.status === 200) {
  //       alert("Sent Successfully, We will get back to you soon.");

  //       // Reset the formData fields
  //       setFormData({
  //         FNAME: "",
  //         EMAIL: "",
  //         url: pathname,
  //         contentTitle: contentTitle,
  //         contentCategory:contentCategory,
  //       });
  //     }
  //   } catch (error) {
  //     console.log("Newsletter error:", error);
  //     alert("Can't send, please check and try again.", error);
  //   }
  // };
  return (
    <Form.Root
      action="https://cloudpro.us22.list-manage.com/subscribe/post?u=433a51ee95aafec37792a952d&amp;id=ee16cacbcb&amp;f_id=008dd0e1f0"
      method="POST"
      className="FormRoot4 mt-[16px]  max-w-[325px]"
    >
      <Form.Field className="FormField4" name="FNAME">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          {/* <Form.Label className="FormLabel">Your Full Name</Form.Label> */}
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your first name
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid first name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            value={formData.FNAME}
            name="FNAME"
            onChange={handleChange}
            className="Input4"
            type="text"
            required
            placeholder="Enter your Name"
          />
        </Form.Control>
      </Form.Field>
{/* 
      <Form.Field className="FormField4" name="LName">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
       
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your last name
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid last name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            value={formData.LName}
            name="LName"
            onChange={handleChange}
            className="Input4"
            type="text"
            required
            placeholder="Enter your Last Name"
          />
        </Form.Control>
      </Form.Field> */}

      <Form.Field className="FormField4" name="EMAIL">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          {/* <Form.Label className="FormLabel">Email</Form.Label> */}
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            value={formData.EMAIL}
            name="EMAIL"
            onChange={handleChange}
            className="Input4"
            type="email"
            required
            placeholder="Enter your Email"
          />
        </Form.Control>
      </Form.Field>

      <div>
        <Form.Submit asChild>
          <button
            type="submit"
            className="text-[#fff] cursor-pointer text-[14px] font-semibold w-full text-center py-2 rounded-[6px] mt-[4px]"
            style={{
              background:
                "linear-gradient(0deg, rgba(217, 217, 217, 0.01), rgba(217, 217, 217, 0.01)),linear-gradient(180deg, #D15A00 0%, #924104 134.15%)",
            }}
          >
            SUBSCRIBE
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default NewsletterForm;
