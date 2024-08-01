import React from 'react'
import QuizGroup from '../quiz/QuizGroup'
import getLatestQuizzesAdded from '@/app/dashboard/actions'

const LatestQuizAdded = async () => {
    const quizzes = await getLatestQuizzesAdded()

  return (
    <div className='mt-10'>
        <h2 className='mb-5 text-primary'>Últimos adicionados</h2>
        <QuizGroup quizzes={quizzes}/>
    </div>
  )
}

export default LatestQuizAdded