"use server"


import { User } from "@/types/user";
import { baseUrl } from "@/utils/base-url";

export default async function signUpUser(values: User) {
  await fetch(`${baseUrl}/user/sign-up?name=${values?.name}&&email=${values?.email}&&password=${values?.password}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY!,
    },
  }).then(response => {
    const user = response.json() 
    return user;    
  }).catch(error => {    
    throw error;
  });
}
