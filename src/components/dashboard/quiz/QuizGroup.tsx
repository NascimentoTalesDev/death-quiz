import React from 'react'
import QuizCard from './QuizCard'
import { Quiz } from '@/types/quiz';

interface QuizGroupProps {
  quizzes: Quiz[]
}

const QuizGroup = ({ quizzes }: QuizGroupProps) => {
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-5'>
        {quizzes?.length > 0 && quizzes.map(quiz => (
            <QuizCard key={quiz?.id} quiz={quiz} />
        ))}
    </div>
  )
}

export default QuizGroup;