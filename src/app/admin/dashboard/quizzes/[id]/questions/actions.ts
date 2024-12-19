"use server";

import { baseUrl } from "@/utils/base-url";
import { revalidatePath } from "next/cache";

export async function updateQuestion(values: { correctAnswer: string; questionId: number; quizId: number | null; question: string; answers: { text: string; }[] }){  
  
  const res = await fetch(`${baseUrl}/questions/${values.questionId}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify(values)
  })
  revalidatePath(`/admin/dashboard/quizzes/${values.quizId}/questions/${values.questionId}`)
  const questionUpdated = await res.json()    
  return questionUpdated
}

export async function deleteQuestion(quizId: number, questionId: number){  
  
  const res = await fetch(`${baseUrl}/questions/${questionId}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'API-Key': process.env.DATA_API_KEY!,
      },
  })
  revalidatePath(`/admin/dashboard/quizzes/${quizId}/questions/${questionId}`)
  const deletedQuestion = await res.json()    
  return deletedQuestion
}

