"use server";

import { baseUrl } from "@/utils/base-url";
import { revalidatePath } from "next/cache";

export async function updateQuestion(values: { correctAnswer: string; questionId: number; quizId: number | null; question: string; answers: { text: string; }[] }){  
  const { questionId, correctAnswer, question, answers  } =  values;
  
  // const res = await fetch(`${baseUrl}/questions/${values.questionId}`, {
  //     method: 'PATCH',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'API-Key': process.env.DATA_API_KEY!,
  //     },
  //     body: JSON.stringify(values)
  // })
  // const { correctAnswer, question, answers  } =  updateQuestionDto;

  const updatedQuestion = await prismadb.question.update({
    where:{
      id: questionId
    },
    data:{
      correctAnswer,
      question
    }
  });

  await prismadb.answer.deleteMany({      
    where:{
      questionId: values.questionId
    }
  })

  await Promise.all(answers.map(answer => 
    prismadb.answer.create({      
      data:{
        questionId,
        answer: answer.text
      }
    })
  ));

  revalidatePath(`/admin/dashboard/quizzes/${values.quizId}/questions/${values.questionId}`)
  // const updatedQuestion = await res.json()    
  return updatedQuestion
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

