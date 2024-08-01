"use server";

import { AuthController } from "@/core/controllers/AuthController";
import { baseUrl } from "@/utils/base-url";

export async function getSession() {
  const authController = new AuthController();
  const cookie = await authController.getTokenSession();
  return cookie;
}

export async function signOutDeath() {
  const authController = new AuthController();
  await authController.removeSession();

  return;
}

export default async function getLatestQuizzesAdded(){
  const res = await fetch(`${baseUrl}/quiz/get-latest-quizzes-added`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'API-Key': process.env.DATA_API_KEY!,
      },
  })
  const quizzes = await res.json()    

  return quizzes
}

export async function findUserById(userId: number){
  const res = await fetch(`${baseUrl}/user/user-id?userId=${userId}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'API-Key': process.env.DATA_API_KEY!,
      },
  })
  const user = await res.json()    

  return user
}
