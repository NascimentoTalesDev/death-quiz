import { Flag, Skull, Trophy, User2Icon, UserCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface UserProps {
    user: {
        name: string,
        email: string,
        image: string,
    }
}

const User = ({ user }: UserProps) => {
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex gap-3'>
            <div className='rounded-lg flex justify-center items-center overflow-hidden w-[120px] h-[120px] border'>
                {user?.image ? 
                    <Image alt='' src={user?.image} width={120} height={120} />
                    :
                    <Image alt='' src={'/images/user.webp'} width={150} height={150} />
                }
            </div>
            <div>
                <h2 className='font-bold text-primary text-base'>{user?.name}</h2>
                <h3 className='font-normal text-[12px]'>{user?.email}</h3>
            </div>
        </div>
        
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                <div className='flex gap-3'>
                    <div className='flex items-center bg-white justify-center w-12 shadow-lg rounded-lg'>
                        <Skull className='w-5 text-primary' />
                    </div>
                    <div className='flex flex-col' >
                        <div><span className='text-sm'>13</span></div>
                        <div><span className='text-[12px]'>Concluidos</span></div>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='flex items-center bg-white justify-center w-12 shadow-lg rounded-lg'>
                        <Trophy className='w-5 text-primary' />
                    </div>
                    <div className='flex flex-col' >
                        <div><span className='text-sm'>1300</span></div>
                        <div><span className='text-[12px]'>Pontos</span></div>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='flex items-center bg-white justify-center w-12 shadow-lg rounded-lg'>
                        <UserCheck className='w-5 text-primary' />
                    </div>
                    <div className='flex flex-col' >
                        <div><span className='text-sm'>5</span></div>
                        <div><span className='text-[12px]'>Amigos</span></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default User