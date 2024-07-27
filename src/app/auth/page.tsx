import Auth from '@/components/Auth';
import React from 'react'

const AuthPage = () => {
  return (
    <div id="auth-content" className='auth-content-left overflow-y-auto flex flex-col justify-center items-center gap-8 md:gap-0 px-4 md:px-0 md:flex-row'>
      
        <div className='md:auth-content-left flex flex-col items-center'>
            <h1 className='md:mt-24 font-extrabold text-2xl md:text-3xl text-center text-gray-900'>Seja Bem vindo ao <br/> Death Quiz</h1>
            <h2 className='text-gray-900 mt-2 md:mt-5 text-sm'>Descubra o mistério da morte aqui!</h2>
        </div>

        <div className='md:h-full w-full flex justify-center items-center md:bg-background'>
          <div className='bg-slate-200/15 border rounded-lg backdrop-blur-lg px-6 py-10 md:flex items-center justify-center w-full max-w-[400px] md:max-w-[350px] mx-auto'>
              <Auth />
          </div>
        </div>
  
    </div>
  )
}

export default AuthPage;