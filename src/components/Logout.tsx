import React from 'react'
import { Button } from './ui/button'
import { ArrowBigLeftDash } from 'lucide-react'

export const Logout = () => {
  return (
    <Button variant={"ghost"} className='w-full gap-2 hover:bg-gray-200 '>
        <ArrowBigLeftDash className='text-primary' /> <span className='text-my_text'>Logout</span>
    </Button>
  )
}
