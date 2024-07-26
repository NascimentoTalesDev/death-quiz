// "use client";

import Back from '@/components/dashboard/Back'
import QuizIdCard from '@/components/dashboard/quiz/QuizIdCard';
import { QuizController } from '@/core/controllers/QuizController';
import { Quiz } from '@/types/quiz';
import { useParams } from 'next/navigation'
import React from 'react'

const QuizIdPage = async({ params}: { params : { id : string} }) => {
  const id = parseInt(params?.id)
  const quizController = new QuizController();
  const quiz: Quiz  = await quizController.findOne(id)
    
  return (
    <div className='bg-white dark:bg-background p-5 rounded-md'>
      <div className='flex gap-3 items-center mb-5'>
        <Back />
        <h1 className=''>{quiz?.title}</h1>
      </div>
      {quiz && 
        <QuizIdCard quiz={quiz} />
      }
    </div>
  )
}

export default QuizIdPage
