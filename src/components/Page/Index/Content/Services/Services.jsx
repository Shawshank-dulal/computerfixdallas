
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";
import Image from "next/image";
import ServiceItems from "./ServiceItems/ServiceItems";
import Introduction from "./Introduction/Introduction";

const Services = () => {

  return (
    <div className="main_container py-20">
      <div className="inside_sidespace">
          <Introduction/>
        <ServiceItems/>
      </div>
   
    </div>
  );
};

export default Services;
