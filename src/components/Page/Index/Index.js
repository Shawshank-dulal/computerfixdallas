import React from "react";
import Introduction from "./Content/Introduction/Introduction";
import Services from "./Content/Services/Services";
import Specification from "./Content/Specification/Specification";
import Why from "./Content/Why/Why";
import Process from "./Content/Process/Process";
import Insights from "./Content/Insights/Insights";
import Faq from "./Content/Faq/Faq";


const Index = () => {
  return (
   <div>
    <Introduction/>
    <Services/>
    <Specification/>
    <Why/>
    <Process/>
    <Insights/>
    <Faq/>
   </div>
  );
};

export default Index;
