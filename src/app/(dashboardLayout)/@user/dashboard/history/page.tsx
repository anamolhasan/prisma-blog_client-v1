import HistoryTable from '@/components/modules/user/historyTable/HistoryTable'
import PaginationControls from '@/components/ui/pagination-controls'
import { blogService } from '@/services/blog.service'
import React from 'react'

const HistoryPage = async ({
  searchParams
}:{
  searchParams: Promise<{page:string}>
}) => {
  const {page} = await searchParams;

  const response = await blogService.getBlogPost({page})

  const posts = response.data?.data || []
  const pagination = response.data?.pagination || {
    limit:5,
    page:1,
    total:0,
    totalPages:1,
  }

  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-6'>Blog Post History</h1>
         <HistoryTable posts={posts}/>
         <PaginationControls meta={pagination}/>
    </div>
  )
}

export default HistoryPage