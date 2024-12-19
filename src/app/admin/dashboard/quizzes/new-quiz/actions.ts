"use server";

import { baseUrl } from "@/utils/base-url";
import { Quiz } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createQuiz(values: Quiz) {
  const res = await fetch(`${baseUrl}/quizzes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
    body: JSON.stringify(values)
  })
  revalidatePath('/admin/dashboard/quizzes')
  revalidatePath('/dashboard/quizzes')
  const quizzes = await res.json()
  return quizzes
}

export async function updateQuiz(id: number, values: Quiz) {
  // const res = await fetch(`${baseUrl}/quizzes/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'API-Key': process.env.DATA_API_KEY!,
  //     },
  //     body: JSON.stringify(values)
  // })

  const quizUpdated = await prismadb.quiz.update({
    where: {
      id
    },
    data: {
      title: values.title,
      image: values.image
    },
  })

  revalidatePath('/admin/dashboard/quizzes')
  revalidatePath('/dashboard/quizzes')
  // const quizUpdated = await res.json()
  return quizUpdated
}

export default async function getAllQuizzesAmin() {
  const res = await fetch(`${baseUrl}/quizzes/admin`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
      'Cache-Control': 'no-cache',
    },
  })
  const quizzes = await res.json()
  return quizzes
}

export async function upload(formData: FormData) {
  const response = await fetch(`${baseUrl}/uploads`, {
    method: 'POST',
    headers: {
      'API-Key': process.env.DATA_API_KEY!,
    },
    body: formData
  });
  const res = response.json()
  return res;
}

export async function deleteImage(image: string) {
  const id = image.split('.com/')[1];

  const response = await fetch(`${baseUrl}/uploads/${id}`, {
    method: 'DELETE',
    headers: {
      'API-Key': process.env.DATA_API_KEY!,
    },
  });
  const res = response.json()
  return res;
}

