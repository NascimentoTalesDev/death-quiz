import React from 'react';
import { CompletedQuizzes, User } from '@prisma/client';
import UserProfile from './UserProfile';

interface ProfileProps{
  user: User & { completedQuizzes : CompletedQuizzes[] }
}

const Profile = async ({ user }: ProfileProps)  => {

  return (
    <UserProfile user={user}/>
  )
}

export default Profile