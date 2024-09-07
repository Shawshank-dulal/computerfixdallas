import ServicesContact from '@/components/Page/Services/ServicesContact/ServicesContact'
import React from 'react'

const page = ({params}) => {
      const serviceSlug=params.slug
      console.log("data",serviceSlug)
  return (
    <div>
      {/* <ServicesContact serviceSlug={serviceSlug}/> */}
    </div>
  )
}

export default page