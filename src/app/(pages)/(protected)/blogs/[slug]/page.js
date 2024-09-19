import BlogDetails from '@/components/Page/BlogPage/BlogDetails/BlogDetails'
import React from 'react'

const page = (props) => {
  const blogslug=props.searchParams.id
  console.log("Blogs id:",blogslug)
  return (
    <div>
        <BlogDetails blogslug={blogslug}/>
    </div>
  )
}

export default page