import QuizGroup from '@/components/dashboard/quizzes/QuizGroup';
import React from 'react'
import getAllFavorites from './actions';
import { useCurrentUser } from '@/hooks/use-current-user';

const FavoritesPage = async() => {
  const user = await useCurrentUser();
  let quizzes

  if (user) {
    let userId: number = user ? parseInt(user.id || '0') : 0;
    quizzes = await getAllFavorites(userId)
  }
  
  return (
    <div className=''>
      <h1 className='mb-5'>Meus Favoritos</h1>
      {quizzes && <QuizGroup quizzes={quizzes} /> }
    </div>
  )
}

export default FavoritesPage
