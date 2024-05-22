import React from 'react'
import {Link} from 'react-router-dom';

const CreateBlogButton = () => {
  return (
    <div className=' w-full  dark:bg-gray-800 '>
    <Link to="/CreateBlog">
      <button className=' bg-blue-500 uppercase text-white ml-3 my-3 sm:px-6 xxs:px-6 ss:px-5  py-1  rounded-md ' >Create Blog</button>
      </Link>
      </div>
  )
}

export default CreateBlogButton
