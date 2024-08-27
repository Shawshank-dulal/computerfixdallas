import BlogDetails from '@/components/Page/BlogPage/BlogDetails/BlogDetails'
import React from 'react'

const page = ({params}) => {
  const blogslug=params.slug
  console.log("Blogs",blogslug)
  return (
    <div>
        <BlogDetails blogslug={blogslug}/>
    </div>
  )
}

export default page