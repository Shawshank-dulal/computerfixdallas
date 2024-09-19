import ServicesContact from '@/components/Page/Services/ServicesContact/ServicesContact'
import React from 'react'

const page = (props) => {
      const serviceSlug=props.searchParams.id
      console.log("data",serviceSlug)
  return (
    <div>
      <ServicesContact serviceSlug={serviceSlug}/>
    </div>
  )
}

export default page