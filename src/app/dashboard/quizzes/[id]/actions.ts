"use server"

import { baseUrl } from "@/utils/base-url"

export async function getQuizById(id: string){
    
    const res = await fetch(`${baseUrl}/quizzes/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
        cache: "no-cache"
    })
    const quizzes = res.json()    
    return quizzes   
}

export async function favoriteQuiz(quizId: number, userId: number){
    console.log(quizId, userId);
    
    const res = await fetch(`${baseUrl}/quizzes/favorite?quizId=${quizId}&&userId=${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    const favoriteUpdated = await res.json()    
    return favoriteUpdated   
}

export async function likeQuiz(quizId: number, userId: number){
    
    const res = await fetch(`${baseUrl}/quizzes/like?quizId=${quizId}&&userId=${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    const quizUpdated = await res.json()    
    return quizUpdated   
}

export async function unLikeQuiz(quizId: number, userId: number){
    
    const res = await fetch(`${baseUrl}/quizzes/unlike?quizId=${quizId}&&userId=${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    const quizUpdated = await res.json()    
    return quizUpdated   
}