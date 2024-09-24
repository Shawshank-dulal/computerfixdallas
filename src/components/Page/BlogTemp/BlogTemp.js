import React from 'react'
import Blogs from '../Index/Content/Insights/Content/Blogs'

const BlogTemp = ({post}) => {
  return (
    <div>
          <div className='main_container inside_sidespace py-20'>
            <p className='text-[#FF7003] text-[14px] font-bold'>Explore More Blogs</p>
            <p className='text-[28px] font-semibold tracking-wide'>Explore Insights and Repair Tips Here </p>
        <Blogs post={post}/>
        </div>
    </div>
  )
}

export default BlogTemp