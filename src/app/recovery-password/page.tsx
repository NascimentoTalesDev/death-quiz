import Auth from '@/components/auth/Auth';
import RecoveryPassword from '@/components/auth/RecoveryPassword';
import React from 'react'

const recoveryPasswordPage = () => {
  return (
    <div id="auth-content" className='auth-content-left overflow-y-auto flex flex-col md:justify-center items-center gap-8 md:gap-0 px-4 md:px-0 md:flex-row'>
      
        <div className='md:auth-content-left flex flex-col items-center'>
            <h1 className='mt-24 font-extrabold text-2xl md:text-3xl text-center text-gray-900'>Seja Bem vindo ao <br/> Death Quiz</h1>
            <h2 className='text-gray-900 mt-2 md:mt-5 text-sm'>Descubra o mistério da morte aqui!</h2>
        </div>

        <div className='md:h-full w-full flex justify-center items-center md:bg-background'>
          <div className='bg-slate-200/15 border rounded-lg backdrop-blur-lg px-6  py-10 md:py-5 md:flex items-center justify-center w-full max-w-[330px] md:max-w-[350px] mx-auto'>
              <RecoveryPassword />
          </div>
        </div>
    </div>
  )
}

export default recoveryPasswordPage;