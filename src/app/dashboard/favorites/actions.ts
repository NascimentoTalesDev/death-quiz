"use server"

import { baseUrl } from "@/utils/base-url"

export default async function getAllFavorites(userId: number,){ 
    console.log("US", userId);
       
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