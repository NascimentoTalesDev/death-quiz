"use server"

import { baseUrl } from "@/utils/base-url"
import { revalidatePath } from "next/cache"

export default async function getAllQuizzes(){
    const res = await fetch(`${baseUrl}/quizzes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    revalidatePath('/dashboard/quizzes')

    const quizzes = await res.json()    
    return quizzes
}