import React from "react";
import Introduction from "./Introduction/Introduction";
import BriefDetails from "./BriefDetails/BriefDetails";
import { fetchTermsPolicy } from "@/utils/termspolicy";

const TermsAndConditions = async () => {
  const termsData = await fetchTermsPolicy();
  console.log(termsData);
  const updatedDate = termsData.termspolicy?.data.attributes.updatedAt;
  console.log("latest info",updatedDate)

  const policyData2 = termsData.termspolicy?.data.attributes.content;
  // console.log("latest info", policyData2);
  return (
    <div>
      {updatedDate && policyData2  && <div>
        <Introduction updatedDate={updatedDate}/>

        <BriefDetails policyContent={policyData2} />
      </div>}
    </div>
  );
};

export default TermsAndConditions;
