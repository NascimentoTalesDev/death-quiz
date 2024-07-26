import React from 'react'
import QuizIdCard from '@/components/dashboard/quiz/QuizIdCard';

const QuizIdPage = async({ params}: { params : { id : string} }) => {
   
  return (
    <div className='bg-white dark:bg-background p-5 rounded-md'>
      {params.id && 
        <QuizIdCard id={params.id} />
      }
    </div>
  )
}

export default QuizIdPage
