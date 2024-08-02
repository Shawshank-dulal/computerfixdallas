import React from "react";
import Introduction from "./Content/Introduction/Introduction";
import Services from "./Content/Services/Services";
import Specification from "./Content/Specification/Specification";
import Why from "./Content/Why/Why";
import Process from "./Content/Process/Process";


const Index = () => {
  return (
   <div>
    <Introduction/>
    <Services/>
    <Specification/>
    <Why/>
    <Process/>
   </div>
  );
};

export default Index;
