
import QuizForm from '@/components/admin/quizzes/QuizForm'
import Back from '@/components/dashboard/Back'
import { useRouter } from 'next/navigation'
import React from 'react'
import { getQuizById } from './actions'

const QuizIdPage = async ({ params }: { params: { id: string } }) => {

  const quiz = await getQuizById(params.id)
  
  return (
    <div>
      <div className='flex justify-between'>
        <Back />
      </div>
      <QuizForm quiz={quiz} />
    </div>
  )
}

export default QuizIdPage