import QuizGroup from '@/components/dashboard/quiz/QuizGroup'
import React from 'react'
import getAllFavorites from './actions'
import { AuthController } from '@/core/controllers/AuthController';

const FavoritesPage = async() => {
  const authController = new AuthController();
  const user = await authController.getCurrentUser();
  const quizzes = await getAllFavorites(user.id)
  console.log("USER", user);
  console.log("QUIZZES", quizzes);
  
  return (
    <div className=''>
      <h1 className='mb-5'>FavoritesPage</h1>
      {quizzes && (
        <QuizGroup quizzes={quizzes}/>
      )}
    </div>
  )
}

export default FavoritesPage
