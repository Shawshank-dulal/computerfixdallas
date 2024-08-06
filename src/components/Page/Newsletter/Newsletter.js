import React from 'react'
import NewsletterForm from './NewsletterForm/NewsletterForm'

const Newsletter = () => {
  return (
    <div className=' inside_sidespace py-20' style={{
        background: "linear-gradient(180deg, rgba(185, 80, 0, 0.01) 4.06%, rgba(185, 80, 0, 0.23) 131.73%)"

    }}>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-[#FF7003] font-bold text-[16px] tracking-[8%]'>Newsletter</p>
        <p className='text-[32px] font-semibold'>Get Notified By Our Newsletter</p>
        <NewsletterForm/>
      </div>
    </div>
  )
}

export default Newsletter