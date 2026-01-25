import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div>
            <Button asChild>
                <Link href={'/prisma/analytics/weekly'}>Weekly</Link>
            </Button>
            <Button asChild>
                <Link href={'/prisma/analytics/monthly'}>Monthly</Link>
            </Button>
        </div>
        {children}
    </div>
  )
}

export default layout