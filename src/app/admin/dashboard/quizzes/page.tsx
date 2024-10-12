import { NewQuiz } from '@/components/admin/quizzes/NewQuiz'
import { QuizTable } from '@/components/admin/quizzes/QuizTable'
import React, { useEffect, useState } from 'react'
import getAllQuizzesAmin from './new-quiz/actions'

const AdminQuizzes = () => {
  const [allQuizzes, setAllQuizzes] = useState(null)

  useEffect(() => {
    const fetchQuizzes = async () => {
      const quizzes = await getAllQuizzesAmin()
      setAllQuizzes(quizzes)
    }

    fetchQuizzes()
  }, [])

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