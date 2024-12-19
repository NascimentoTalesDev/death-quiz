"use server";

import { baseUrl } from "@/utils/base-url";
import { revalidatePath } from "next/cache";

export async function getQuizById(id: string) {

  const res = await fetch(`${baseUrl}/quizzes/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
    cache: "no-cache"
  })
  const quizzes = res.json()
  return quizzes
}

export async function deleteQuiz(id: number) {

  const res = await fetch(`${baseUrl}/quizzes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
    cache: "no-cache"
  })
  revalidatePath(`/admin/dashboard/quizzes`)
  const quizzes = res.json()
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

