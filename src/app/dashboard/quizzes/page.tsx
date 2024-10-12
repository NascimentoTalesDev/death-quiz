import React from 'react'
import getAllQuizzes from './actions'
import QuizGroup from '@/components/dashboard/quizzes/QuizGroup'

const QuizPage = async() => {
  const quizzes = await getAllQuizzes()
  console.log(quizzes);
  
  return (
    <div className=''>
      <h1 className='mb-5'>Todos os Quizzes</h1>
      <QuizGroup quizzes={quizzes} />
    </div>
  )
}

export default QuizPage
