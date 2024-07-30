import QuizGroup from '@/components/dashboard/quiz/QuizGroup'
import React from 'react'
import getAllFavorites from './actions'
import { AuthController } from '@/core/controllers/AuthController';

const FavoritesPage = async() => {
  const authController = new AuthController();
  const user = await authController.getCurrentUser();
  const quizzes = await getAllFavorites(user.id)
  
  return (
    <div className=''>
      <h1 className='mb-5'>FavoritesPage</h1>
      <QuizGroup quizzes={quizzes}/>
    </div>
  )
}

export default FavoritesPage
