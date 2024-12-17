import React from 'react'
import FavoriteQuizButton from './FavoriteQuizButton'
import { Favorite, LikedQuizzes, Quiz, UnLikedQuizzes, User } from '@prisma/client'
import LikeQuizButton from './LikeQuizButton';
import UnLikeQuizButton from './UnLikeQuizButton';

interface ActionsProps{
    userId: number,
    quiz: Quiz & { favorites: Favorite[], liked: LikedQuizzes[], unLiked: UnLikedQuizzes[] };
}
const Actions = ({ userId, quiz} : ActionsProps) => {
  return (
    <div className='flex gap-3'>
        <FavoriteQuizButton userId={userId} quiz={quiz} />
        <LikeQuizButton userId={userId} quiz={quiz} />
        <UnLikeQuizButton userId={userId} quiz={quiz} />
    </div>
  )
}

export default Actions