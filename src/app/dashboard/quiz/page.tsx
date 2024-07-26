import QuizGroup from '@/components/dashboard/quiz/QuizGroup'
import { Quiz } from '@/types/quiz'
import React from 'react'
import getAllQuizzes from './actions'

const QuizPage = async() => {
  const quizzes = await getAllQuizzes()
  console.log("QuizPAge", quizzes);

  return (
    <div className='bg-white dark:bg-background p-5 rounded-md'>
      <h1 className='mb-5'>QuizPage</h1>
      <QuizGroup quizzes={quizzes}/>
    </div>
  )
}

export default QuizPage
