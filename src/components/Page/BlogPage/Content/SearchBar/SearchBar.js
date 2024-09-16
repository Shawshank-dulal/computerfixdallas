"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = ({page,pagesize}) => {
    const [query,setQuery]=useState('')
    const router=useRouter()
    const currentpage=page || 1;
    const currentpagesize=pagesize || 6;

    const handleSubmit=(e)=>{
        e.preventDefault()
        setQuery(query)
        router.push(`/blogs?page=1&pageSize=6&query=${query}`)
    }
  return (
    <div className='main_container inside_sidespace py-8'>
      <div className='flex justify-end search_content'>
      <div>
        <form className='bg-[#331704] text-[15px] flex justify-between align-middle rounded-full px-3 h-[42px] md:w-[380px]'>
        <input name='query' value={query} onChange={(e)=>setQuery(e.target.value)} className='w-full bg-transparent border-none outline-none focus:outline-none focus:border-none pl-2 placeholder:text-[#a8a8a8]' type='search' placeholder='Search for blogs'/>
        <button onClick={handleSubmit} className='text-[24px] max-w-[50px] text-[#fff]'><IoSearch /></button>
        </form>
    </div>
      </div>
    </div>
  )
}

export default SearchBar
