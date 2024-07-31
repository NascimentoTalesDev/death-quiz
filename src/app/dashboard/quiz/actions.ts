"use server"

import { baseUrl } from "@/utils/base-url"

export default async function getAllQuizzes(){
    const res = await fetch(`${baseUrl}/quiz`, {
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