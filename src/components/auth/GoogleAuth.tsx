"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { GoogleIcon } from '../icons/GoogleIcon'
import { signIn } from "next-auth/react";

export const GoogleAuth = () => {
  const [isLogin, setIsLogin] = useState(false)

  const login = async() => {
    setIsLogin(true)
    await signIn("google", { redirect: true, callbackUrl: "/dashboard"})
    setIsLogin(false)
  }
  return (
    <Button onClick={login} variant={"default"}><GoogleIcon /><span className='ml-2'>{isLogin ? "Aquarde..." : "GoogleAuth"}</span></Button>
  )
}
