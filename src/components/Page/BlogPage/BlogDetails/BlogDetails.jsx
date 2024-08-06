import React from 'react'
import Introduction from './Introduction/Introduction'
import BlogContent from './BlogContent/BlogContent'
import Newsletter from '../../Newsletter/Newsletter'
import Blogs from '../../Index/Content/Insights/Content/Blogs'
import BlogTemp from '../../BlogTemp/BlogTemp'

const BlogDetails = () => {
  return (
    <div>
        <Introduction/>
        <BlogContent/>
        <Newsletter/>
        <BlogTemp/>
    </div>
  )
}

export default BlogDetails