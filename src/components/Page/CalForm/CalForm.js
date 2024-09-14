"use client";
import React from "react";


import toast, { Toaster } from "react-hot-toast";
import Introduction from "./Introduction/Introduction";
import Calendar from "./Calendar/Calendar";
const CalForm = () => {

  return (

      <div className="main_container inside_sidespace ">
       <div className="">
       <Introduction/>
       <Calendar/>
       </div>
        
     
      </div>

  );
};

export default CalForm;
