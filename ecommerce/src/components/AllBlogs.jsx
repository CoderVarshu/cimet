import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import BlogCard from './BlogCard'
import Pagination from './Pagination'

const AllBlogs = () => {
   
    const data = useLoaderData()
     const [start, setStart] = useState(0)

  return (
    <div >
      <div className='flex justify-center flex-wrap'>
        {data.length > 0 && data.slice(start,start+10).map((item)=> <BlogCard key={item.id} blogData={item} />)}
      </div>
       <div className='flex justify-end mb-2 mr-2'> <Pagination start={start} setStart={setStart} /></div>
    </div>
  )
}

export default AllBlogs