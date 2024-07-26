import React from 'react'
import QuizCard from './QuizCard'
import { QuizController } from '@/core/controllers/QuizController'
import { Quiz } from '@/types/quiz'
// import { quizzes } from "@/data/quizzes";

const QuizGroup = async () => {
    let quizController = new QuizController()
    let quizzes: Quiz[]  = await quizController.getAll()
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-5'>
        {quizzes?.length > 0 && quizzes.map(quiz => (
            <QuizCard key={quiz?.id} quiz={quiz} />
        ))}
    </div>
  )
}

export default QuizGroup;