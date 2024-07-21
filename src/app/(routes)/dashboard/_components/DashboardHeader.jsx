import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
          <h1 className='text-3xl font-bold'>Dashboard</h1>
            <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default DashboardHeader