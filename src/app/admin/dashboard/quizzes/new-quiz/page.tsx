
import QuizForm from '@/components/admin/quizzes/QuizForm'
import Back from '@/components/dashboard/Back'
import React from 'react'

const NewQuizPage = () => {
  return (
    <div>
      <div className='flex justify-between'>
            <Back />

        </div>
        <QuizForm />
      
    </div>
  )
}

export default NewQuizPage