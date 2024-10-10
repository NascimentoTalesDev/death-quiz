import React from 'react'
import getAllQuizzes from './actions'
import QuizCard from '@/components/dashboard/quiz/QuizCard'
import { Quiz } from '@prisma/client'
import QuizGroup from '@/components/dashboard/quiz/QuizGroup'

const QuizPage = async() => {
  const quizzes = await getAllQuizzes()
  console.log(quizzes);
  
  return (
    <div className=''>
      <h1 className='mb-5'>Todos os Quizzes</h1>
      {/* <QuizGroup quizzes={quizzes} /> */}
    </div>
  )
}

export default QuizPage
