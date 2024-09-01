import React from 'react'
import Introduction from './Introduction/Introduction'
import BriefDetails from './BriefDetails/BriefDetails'
import { fetchTermsPolicy } from '@/utils/termspolicy'

const Policy = async() => {
  const termsData=await fetchTermsPolicy()
  console.log(termsData)
  const policyData=termsData.termspolicy.data.attributes.description
  // console.log("latest info",policyData)

  const policyData2=termsData.termspolicy.data.attributes.content
  console.log("latest info",policyData2)
  return (
    <div>

      
                <div>
                      <Introduction/>
                     
                      <BriefDetails policyContent={policyData2}/>
                </div>
        
    
    </div>
  )
}

export default Policy
