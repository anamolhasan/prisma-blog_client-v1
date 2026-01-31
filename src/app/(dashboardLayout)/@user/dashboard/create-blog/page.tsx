import CreateBlogFormClient from '@/components/modules/user/createBlog/CreateBlogFormClient'
import CreateBlogFormServer from '@/components/modules/user/createBlog/CreateBlogFormServer'
import React from 'react'

const CreateBlog = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-yellow-800 text-3xl py-4'>Create Blog Form Client</h1>
      {/* <CreateBlogFormServer /> */}
      <CreateBlogFormClient />
    </div>
  )
}

export default CreateBlog