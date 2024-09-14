import React from 'react'
import Introduction from './Introduction/Introduction'
import Dealswith from './DealsWith/Dealswith'
import Faq from '../Index/Content/Faq/Faq'
import AwardSupport from './AwardSupport/AwardSupport'

const Services = () => {
  return (
    <div>
        <Introduction/>
      <Dealswith/>
      <AwardSupport/>
    <div className=''>
    <Faq/>
    </div>
    
    </div>
  )
}

export default Services