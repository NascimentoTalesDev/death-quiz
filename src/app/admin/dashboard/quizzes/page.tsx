import { NewQuiz } from '@/components/admin/quizzes/NewQuiz'
import { QuizTable } from '@/components/admin/quizzes/QuizTable'
import React from 'react'
import getAllQuizzesAmin from './new-quiz/actions'

const AdminQuizzes = async() => {
  let allQuizzes
  try {
    allQuizzes = await getAllQuizzesAmin()
  } catch (error) {
    console.log(error);
  }
  
  return (
    <div>
      <NewQuiz />
      {allQuizzes && (
        <QuizTable allQuizzes={allQuizzes} />
      )}
    </div>
  )
}

export default AdminQuizzes