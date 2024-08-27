import Image from "next/image";
import './style.css'
import ServiceDetail from "@/components/SplideSlider/ServiceDetail";
import Introduction from "./Introduction/Introduction";
const Why = () => {

  return (
   <div className="pb-20">
     <div className="main_container ">


 <Introduction/>
  </div>
  <div className="side_padding">
    <ServiceDetail/>
  </div>
   </div>
  )
}

export default Why