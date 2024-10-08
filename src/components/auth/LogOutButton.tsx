"use client"

import React from 'react'
import { ArrowBigLeftDash } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const LogOutButton = () => {
  const logOut = async() => {
    await signOut({ callbackUrl: "/auth"})
  }

  return (
    <button onClick={logOut} className='w-full flex items-center p-3 transition-all rounded-lg justify-center gap-2 logout hover:bg-gray-200 hover:justify-start'>
        <ArrowBigLeftDash className='text-primary' /> <span className='text-my_text'>Logout</span>
    </button>
  )
}
