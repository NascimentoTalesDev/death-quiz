"use server"

import { baseUrl } from "@/utils/base-url"

export async function getQuizById(id: string){
    
    const res = await fetch(`${baseUrl}/quizId?id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
        cache: "no-cache"
    })
    const quizzes = await res.json()    
    return quizzes   
}

export async function favoriteQuiz(quizId: number, userId: number){
    
    const res = await fetch(`${baseUrl}/quiz/favorites?quizId=${quizId}&&userId=${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    const quizUpdated = await res.json()    
    return quizUpdated   
}