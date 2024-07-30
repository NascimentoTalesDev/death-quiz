import QuizGroup from '@/components/dashboard/quiz/QuizGroup'
import React from 'react'
import getAllQuizzes from './actions'

const QuizPage = async() => {
  const quizzes = await getAllQuizzes()

  return (
    <div className=''>
      <h1 className='mb-5'>QuizPage</h1>
      <QuizGroup quizzes={quizzes}/>
    </div>
  )
}

export default QuizPage
