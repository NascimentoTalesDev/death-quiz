"use server"

import { AuthController } from "@/core/controllers/AuthController";
import { User } from "@/types/user";
import { baseUrl } from "@/utils/base-url";

export async function signUpUser(values: User) {
  const res = await fetch(`${baseUrl}/user/sign-up?name=${values?.name}&&email=${values?.email}&&password=${values?.password}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY!,
    },
  })
  const user = await res.json()  
  if (user) {
    const authController = new AuthController()
    await authController.saveSession(user?.token)
    return user   
  }   
  throw new Error("Ocorreu um erro inesperado");

}

export async function signInUser(values: User) {
  const res = await fetch(`${baseUrl}/user/sign-in?email=${values?.email}&&password=${values?.password}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY!,
    },
  })
  const user = await res.json()  
  if (user) {
    const authController = new AuthController()
    await authController.saveSession(user?.token)
    return user   
  }   
  throw new Error("Ocorreu um erro inesperado");

}
