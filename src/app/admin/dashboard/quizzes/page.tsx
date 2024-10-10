import getAllQuizzes from '@/app/dashboard/quiz/actions'
import { NewQuiz } from '@/components/admin/quizzes/NewQuiz'
import { QuizTable } from '@/components/admin/quizzes/QuizTable'
import React from 'react'

const AdminQuizzes = async() => {
  const allQuizzes = await getAllQuizzes()
  
  return (
    <div>
      <NewQuiz />
      <QuizTable allQuizzes={allQuizzes} />
    </div>
  )
}

export default AdminQuizzes