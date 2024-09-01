import React from 'react'

const BriefDetails = ({policyContent}) => {
  return (
    <div className='main_container inside_sidespace'>

<div className='flex flex-col gap-2'>
                        
                 
                        {policyContent && policyContent.map((item,index)=>{
                          return(
                            <div key={index} >
                             {item.children.map((item2,index2)=>{
                              return(
                                <p key={index2}>{item2.text}</p>
                              )
                            })}
                            </div>
                          )
                        })}     </div>
    </div>
  )
}

export default BriefDetails