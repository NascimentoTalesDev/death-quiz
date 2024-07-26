"use server"

export default async function getQuizById(id: string){
    
    const res = await fetch(`http://localhost:3000/api/quiz/quizId?id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },        
    })
    
    const quiz = await res.json()    

    return quiz    
}