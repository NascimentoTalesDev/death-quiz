import { NewQuiz } from '@/components/admin/quizzes/NewQuiz'
import { QuizTable } from '@/components/admin/quizzes/QuizTable'
import React from 'react'
import getAllQuizzesAmin from './new-quiz/actions'

const AdminQuizzes = async() => {
  const allQuizzes = await getAllQuizzesAmin()
  
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