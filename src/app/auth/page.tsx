import Auth from '@/components/Auth';
import { Input } from '@/components/ui/input';
import React from 'react'

const AuthPage = () => {
  return (
    <div id="auth-content" className=' grid grid-cols-2'>
        <div id="auth-content-left" className='flex flex-col items-center'>
            <h1 className='mt-20 font-extrabold text-3xl text-center text-gray-900'>Seja Bem vindo ao <br/> Death Quiz</h1>
            <h2 className='text-gray-900 mt-5 text-sm'>Descubra o mistério da morte aqui!</h2>
        </div>
        <div className='flex items-center justify-center w-full max-w-[350px] mx-auto'>
            <Auth />
        </div>
    </div>
  )
}

export default AuthPage;