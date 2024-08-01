import QuizGroup from '@/components/dashboard/quiz/QuizGroup'
import React from 'react'
import getAllFavorites from './actions'
import { useCurrentUser } from '@/hooks/use-current-user';

const FavoritesPage = async() => {
  const user = await useCurrentUser()
  const quizzes = await getAllFavorites(user?.id)
  
  return (
    <div className=''>
      <h1 className='mb-5'>Meus Favoritos</h1>
      {quizzes && (
        <QuizGroup quizzes={quizzes}/>
      )}
    </div>
  )
}

export default FavoritesPage
