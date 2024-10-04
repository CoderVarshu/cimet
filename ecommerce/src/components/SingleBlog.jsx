import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BlogCard from './BlogCard'

const SingleBlog = () => {

    // const {id} 

    const data  = useLoaderData()
    console.log("DATA" , data)

  return (
    <div className='flex justify-center'>
        <BlogCard key={data.id} blogData={data} />
    </div>
  )
}

export default SingleBlog