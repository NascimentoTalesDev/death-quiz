"use server"

import { baseUrl } from "@/utils/base-url"

export async function getAllFriends(userId: number,){        
    const res = await fetch(`${baseUrl}/users/friends?userId=${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })

    const friends = await res.json()    
    return friends
}

export async function searchFriends(query: string){        
    const res = await fetch(`${baseUrl}/users/friends/results?search_query=${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    if (res.ok) {
        const search = await res.json()                   
        return search
    }
    return []
}