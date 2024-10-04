import { Card } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ blogData }) => {
 
    const navigate = useNavigate()

    return (
        <Card className='w-1/4 m-4 p-5 text-center cursor-pointer' onClick={()=>navigate(`/blog/${blogData?.id}`) } >
            <div className='text-blue-gray-900 text-xl'>
               {/* {blogData.id}  */}
               {blogData.title}
            </div>
            <div className='text-blue-gray-400'>
                {blogData.body}
            </div>
        </Card>
    )
}

export default BlogCard