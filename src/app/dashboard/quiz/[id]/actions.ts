"use server"

import { baseUrl } from "@/utils/base-url"

export default async function getQuizById(id: string){
    
    const res = await fetch(`${baseUrl}/quiz/quizId?id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },        
    })
    
    const quiz = await res.json()    

    return quiz    
}