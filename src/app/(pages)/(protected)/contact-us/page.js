import ContactUs from '@/components/Page/ContactUs/ContactUs'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
      <ContactUs/>
      </Suspense>
    </div>
  )
}

export default page