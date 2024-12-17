import QuizGroup from '@/components/dashboard/quizzes/QuizGroup';
import React from 'react'
import { getAllFavorites, searchFavorites } from './actions';
import { useCurrentUser } from '@/hooks/use-current-user';
import { SearchParamsProps } from '@/interfaces/searchparams';

const FavoritesPage = async ({ searchParams }: Readonly<SearchParamsProps>) => {
  let quizzes;
  const user = await useCurrentUser();
  const query = searchParams?.query ?? ""

  if (user) {
    let userId: number = user ? parseInt(user.id || '0') : 0;

    if (query) {
      quizzes = await searchFavorites(query, userId)
    } else {
      quizzes = await getAllFavorites(userId)
    }
  }

  return (
    <div className=''>
      <h1 className='mb-5'>Meus Favoritos</h1>
      {!quizzes || !quizzes.length ?
        <>Nemhum quiz encontrado</>
        :
        <QuizGroup quizzes={quizzes} />
      }
    </div>
  )
}

export default FavoritesPage
