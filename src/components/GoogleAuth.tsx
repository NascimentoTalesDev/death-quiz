import React from 'react'
import { Button } from './ui/button'
import { GoogleIcon } from './icons/GoogleIcon'

export const GoogleAuth = () => {
  return (
    <Button variant={"default"}><GoogleIcon /><span className='ml-2'>GoogleAuth</span></Button>
  )
}
