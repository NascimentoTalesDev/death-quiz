"use client"

import React, { useActionState } from 'react'
import { Button } from './ui/button'
import { GoogleIcon } from './icons/GoogleIcon'
import { signIn } from "next-auth/react";

export const GoogleAuth = () => {
  
  const login = async() => {
    await signIn("google", { redirect: true, callbackUrl: "/dashboard"})
  }
  return (
    <Button onClick={login} variant={"default"}><GoogleIcon /><span className='ml-2'>GoogleAuth</span></Button>
  )
}
