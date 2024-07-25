import React from 'react'
import QuizCard from './QuizCard'
import { quizzes } from "@/data/quizzes";

const QuizGroup = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-5'>
        {quizzes?.length > 0 && quizzes.map(quiz => (
            <QuizCard key={quiz?.id} quiz={quiz} />
        ))}
    </div>
  )
}

export default QuizGroup;