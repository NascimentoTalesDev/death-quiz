"use server"

import { baseUrl } from "@/utils/base-url"
import { revalidatePath } from "next/cache"

export async function getAllQuizzes(){
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

export async function searchQuizzes(query: string){
    const res = await fetch(`${baseUrl}/quizzes/results?search_query=${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    if (res.ok) {
        revalidatePath('/dashboard/favorites')
        const search = await res.json()                   
        return search
    }
    return
}