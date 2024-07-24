import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'

interface AvatarProfileProps{
    user: {
        name: string,
        email: string,
        image: string,
    }
}

const AvatarProfile = ({ user }: AvatarProfileProps) => {
    return (
    <Avatar>
        <AvatarImage src={`${user?.image}`} />
        <AvatarFallback>{user?.name[0]}{user?.name[1]}</AvatarFallback>
    </Avatar>
  )
}

export default AvatarProfile;

