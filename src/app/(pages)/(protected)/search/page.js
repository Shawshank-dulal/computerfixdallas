import SearchedContent from '@/components/Page/BlogPage/Content/SearchBar/Content/SearchedContent'
import React from 'react'

const page = (props) => {
    console.log('search Params',props.searchParams.query)
    const query=props.searchParams.query
  return (
    <div>
      
      {/* <SearchedContent query={query}/> */}
    </div>
  )
}

export default page
