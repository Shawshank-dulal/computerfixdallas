import React from 'react'
import Introduction from './Introduction/Introduction'
import Dealswith from './DealsWith/Dealswith'
import Faq from '../Index/Content/Faq/Faq'

const Services = () => {
  return (
    <div>
      <Introduction/>
      <Dealswith/>
    <div className='pt-20'>
    <Faq/>
    </div>
    </div>
  )
}

export default Services