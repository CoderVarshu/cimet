import { Card } from '@material-tailwind/react'
import React from 'react'

const BlogCard = ({ blogData }) => {
    return (
        <Card className='w-1/4 m-4 p-5 text-center' >
            <div className='text-blue-gray-900 text-xl'>
                {blogData.title}
            </div>
            <div className='text-blue-gray-400'>
                {blogData.body}
            </div>
        </Card>
    )
}

export default BlogCard