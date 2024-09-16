import React from 'react'
import Introduction from './Content/Introduction/Introduction'
import Blogs from './Content/BlogItems/Blogs'
import Categories from './Content/Categories/Categories'
import './Content/Categories/style.css'

const BlogPage = () => {
  return (
    <div className=''>
        <Introduction/>
  
     <Categories/>
    </div>
  )
}

export default BlogPage