import React from 'react'
import { getAllQuizzes, searchQuizzes } from './actions'
import QuizGroup from '@/components/dashboard/quizzes/QuizGroup'
import { SearchParamsProps } from '@/interfaces/searchparams'

const QuizPage = async({ searchParams }: Readonly<SearchParamsProps>) => {
  let quizzes:[]
  const query = searchParams?.query ?? ""
  
  if (query) {
    quizzes = await searchQuizzes(query)  
  }else{
    quizzes = await getAllQuizzes()  
  }
  
  return (
    <div className=''>
      <h1 className='mb-5'>Todos os Quizzes</h1>
      {!quizzes || !quizzes.length ? 
          <>Nemhum quiz encontrado</>
        : 
        <QuizGroup quizzes={quizzes} />
      }
    </div>
  )
}

export default QuizPage
