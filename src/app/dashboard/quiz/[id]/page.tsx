// "use client";

import Back from '@/components/dashboard/Back'
import { Quiz } from '@/types/quiz';
import React from 'react'
import getQuizById from './actions';
import QuizIdCard from '@/components/dashboard/quiz/QuizIdCard';

const QuizIdPage = async({ params}: { params : { id : string} }) => {
    
  return (
    <div className='bg-white dark:bg-background p-5 rounded-md'>
      <div className='flex gap-3 items-center mb-5'>
        <Back />
        <h1>{params?.id}</h1>
      </div>
    </div>
  )
}

export default QuizIdPage
