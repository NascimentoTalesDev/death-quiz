"use server";

import { baseUrl } from "@/utils/base-url";
import { Quiz } from "@prisma/client";

export default async function createQuestion(values: Quiz ){
  const res = await fetch(`${baseUrl}/questions`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify(values)
  })
  const quizUpdated = await res.json()    

  return quizUpdated
}

