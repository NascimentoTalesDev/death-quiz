"use server"

import { baseUrl } from "@/utils/base-url"

export async function getAllFavorites(userId: number,){        
    const res = await fetch(`${baseUrl}/quizzes/favorites?userId=${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })

    const quizzes = await res.json()    
    return quizzes
}

export async function searchFavorites(query: string, userId: number){        
    const res = await fetch(`${baseUrl}/quizzes/favorites/results?search_query=${query}&userId=${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    if (res.ok) {
        // revalidatePath('/dashboard/quizzes')
        const search = await res.json()                   
        return search
    }
    return []
}