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
    <div >
     <Cal 
    calLink="npanthi/15min"
    style={{maxWidth:"100%",minHeight:"490px",overflow:"auto"}}
    config={{layout: 'month_view'}}
  
    
  /></div>
  )
}

export default Calendar