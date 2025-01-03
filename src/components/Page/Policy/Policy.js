import React from "react";
import Introduction from "./Introduction/Introduction";
import BriefDetails from "./BriefDetails/BriefDetails";
import { fetchPrivacypolicy } from "@/utils/privacypolicy";

const Policy = async () => {
  const termsData = await fetchPrivacypolicy();
  console.log(termsData);
  const updatedDate = termsData?.privacypolicy?.data?.attributes?.updatedAt;
  console.log("latest info",updatedDate)

  const policyData2 = termsData?.privacypolicy?.data?.attributes?.content;
  // console.log("latest info", policyData2);


  return (
    <div>
    
      <div>
        <Introduction updatedDate={updatedDate}/>

        <BriefDetails policyContent={policyData2} />
      </div> 
    </div>
  );
};

export default Policy;
