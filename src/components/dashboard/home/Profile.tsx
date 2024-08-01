import React from 'react';
import User from './User';
import { useCurrentUser } from '@/hooks/use-current-user';

const Profile = async ()  => {
  const user = await useCurrentUser()

  return (
    <User user={user }/>
  )
}

export default Profile