"use server"

import { QuizController } from "@/core/controllers/QuizController"
import { baseUrl } from "@/utils/base-url"

export async function getQuizById(id: string){
    
    const res = await fetch(`${baseUrl}/quizId?id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    const quizzes = await res.json()    
    return quizzes   
}

export async function favoriteQuiz(quizId: number, userId: number){
    
    const quizController = new QuizController();
    const quizUpdated = await quizController.favorite(quizId, userId);
        
    return quizUpdated   
}