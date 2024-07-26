"use server"

import { baseUrl } from "@/utils/base-url"
import axios from "axios"

export default async function getQuizById(id: string){
    
    const res = await fetch(`${baseUrl}/quizId?id=2`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    const quizzes = await res.json()    

    return quizzes   
}