import React from 'react'
import FavoriteQuizButton from './FavoriteQuizButton'
import { Favorite, Quiz, User } from '@prisma/client'

interface ActionsProps{
    userId: number,
    quiz: Quiz & { favorites: Favorite[] };
}
const Actions = ({ userId, quiz} : ActionsProps) => {
  return (
    <div>
        <FavoriteQuizButton userId={userId} quiz={quiz} />
    </div>
  )
}

export default Actions