"use client"

import React from 'react'
import { Button } from './ui/button'
import { ArrowBigLeftDash } from 'lucide-react'
import { signOut } from 'next-auth/react'

export const Logout = () => {
  const logOut = async() => {
    await signOut({ callbackUrl: "/auth"})
  }

  return (
    <Button variant={"ghost"} onClick={logOut} className='w-full gap-2 hover:bg-gray-200 '>
        <ArrowBigLeftDash className='text-primary' /> <span className='text-my_text'>Logout</span>
    </Button>
  )
}
