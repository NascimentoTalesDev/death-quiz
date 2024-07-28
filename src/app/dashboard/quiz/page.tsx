import QuizGroup from '@/components/dashboard/quiz/QuizGroup'
import React from 'react'
import getAllQuizzes from './actions'

const QuizPage = async() => {
  const quizzes = await getAllQuizzes()

  return (
    <div className='bg-white dark:bg-background rounded-md'>
      <h1 className='mb-5'>QuizPage teste</h1>
      <QuizGroup quizzes={quizzes}/>
    </div>
  )
}

export default QuizPage
