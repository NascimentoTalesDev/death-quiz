"use server"

export default async function getAllQuizzes(){
    const res = await fetch("http://localhost:3000/api/quiz", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    const quizzes = await res.json()    

    return quizzes
}