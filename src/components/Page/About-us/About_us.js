import Image from 'next/image'
import React from 'react'
import Connect from './Contents/Connect/Connect'
import Mission from './Contents/Mission/Mission'
import WhyContent from './Contents/WhyContent/WhyContent'
import BlogTemp from '../BlogTemp/BlogTemp'
import Team from './Contents/Team/Team'

const About_us = () => {
  return (
    <div className='inside_sidespace'>
      <Connect/>
   <div className='main_container'>
   <Mission/>
      <WhyContent/>
      <Team/>
      <BlogTemp/>
   </div>
    </div>
  )
}

export default About_us
