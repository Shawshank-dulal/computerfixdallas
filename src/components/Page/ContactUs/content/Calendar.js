"use client"
import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Calendar = () => {
	useEffect(()=>{
        (async function () {
          const cal = await getCalApi({});
          cal("ui", {theme: "dark","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])

   
  return (
    <>
     <Cal 
    calLink=""
    style={{maxWidth:"900px",minHeight:"490px",overflow:"auto"}}
    config={{layout: 'month_view'}}
  
    
  /></>
  )
}

export default Calendar