import { useEffect, useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import BlogCard from './BlogCard'
import Pagination from './Pagination'

const AllBlogs = () => {
   
    const data = useLoaderData()
    let [searchParams, setSearchParams] = useSearchParams();
    let startPage=Number(searchParams.get("page"))||0

    if(startPage){
      startPage=(startPage-1)*10
    }
     const [start, setStart] = useState(startPage)
     useEffect(()=>{
      setSearchParams({"page":(start/10)+1})
     },[start])
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