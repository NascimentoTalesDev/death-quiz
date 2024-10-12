import QuizIdCard from '@/components/dashboard/quizzes/QuizIdCard'
import React from 'react'

const QuizIdPage = async({ params}: { params : { id : string} }) => {
   
  return (
    <div className='bg-white dark:bg-background rounded-md'>
      {params.id && 
        <QuizIdCard id={params.id} />
      }
    </div>
  )
}

export default QuizIdPage
