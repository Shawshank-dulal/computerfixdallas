
import './style.css'

import Introduction from "./Introduction/Introduction";
import ServiceList from "./ServiceList/ServiceList";
const Why = () => {

  return (
   <div className="pb-20">
     <div className="main_container ">


 <Introduction/>
  </div>
  <div className="side_padding">

    <ServiceList/>
  </div>
   </div>
  )
}

export default Why