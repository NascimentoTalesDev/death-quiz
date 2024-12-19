import { useCurrentUser } from '@/hooks/use-current-user';
import { SearchParamsProps } from '@/interfaces/searchparams';
import React from 'react'
import { getAllFriends, searchFriends } from './actions';

const FriendsPage = async ({ searchParams }: Readonly<SearchParamsProps>) => {
  let friends;
  const user = await useCurrentUser();
  const query = searchParams?.query ?? ""

  if (user) {
    let userId: number = user ? parseInt(user.id || '0') : 0;

    if (query) {
      friends = await searchFriends(query)
    } else {
      friends = await getAllFriends(userId)
    }
  }

  return (
    <div className=''>
      <h1 className='mb-5'>Meus Favoritos</h1>
      {!friends || !friends.length ?
        <>Nenhum usuário encontrado</>
        :
        <>Meus amigos aqui</>
      }
    </div>
  )
}

export default FriendsPage