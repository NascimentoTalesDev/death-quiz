import { Published } from '@/components/admin/quizzes/Published'
import QuestionsForm from '@/components/admin/quizzes/QuestionsForm'
import Back from '@/components/dashboard/Back'
import React from 'react'

const QuestionsPage = async ({ params }: { params: { id: string } }) => {

  return (
    <div>
      {params.id &&
        <>
          <Back />
          <QuestionsForm quizId={params.id} />
        </>

      }
    </div>
  )
}

export default QuestionsPage