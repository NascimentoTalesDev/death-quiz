"use client"

import React from 'react'
import { ArrowBigLeftDash } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { getSession, signOutDeath } from '@/app/dashboard/actions'
import { useRouter } from 'next/navigation'

export const LogOutButton = () => {
  const router = useRouter()

  const logOut = async() => {
    const res = await getSession()
    if(res){
      await signOutDeath()
      router.replace("/auth")
    }else{
      await signOut({ callbackUrl: "/auth"})
    }
  }

  return (
    <button onClick={logOut} className='w-full flex items-center p-3 transition-all rounded-lg justify-center gap-2 logout hover:bg-gray-200 hover:justify-start'>
        <ArrowBigLeftDash className='text-primary' /> <span className='text-my_text'>Logout</span>
    </button>
  )
}
