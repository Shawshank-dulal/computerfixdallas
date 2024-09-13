import { fetchhomeintro } from '@/utils/homeintro'
import React from 'react'
import Introduction from './Introduction'

const IntroMain = async() => {
    const fetchData=await fetchhomeintro()
    const newData=fetchData?.homeintro?.data
    console.log(newData)
  return (
    <div>
      <Introduction newData={newData}/>
    </div>
  )
}

export default IntroMain
