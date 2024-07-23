import { Input } from '@/components/ui/input';
import React from 'react'

const Auth = () => {
  return (
    <div className='auth-content grid grid-cols-2'>
        <div className='auth-content-left flex flex-col items-center'>
            <h1 className='mt-20 font-extrabold text-3xl text-center text-gray-900'>Seja Bem vindo ao <br/> Death Quiz</h1>
            <h2 className='text-gray-900 mt-5 text-sm'>Descubra o mistério da morte aqui!</h2>
        </div>
        <div>
            <h2>Login to your Account</h2>
            <span>with your registered Email Address</span>
            <Input />
        </div>
    </div>
  )
}

export default Auth;