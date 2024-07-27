import { QuizController } from "@/core/controllers/QuizController"
import { UserController } from "@/core/controllers/UserController";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

//   const { searchParams } = new URL(request.url);

  try {
    const userController = new UserController()
    const res = userController.signIn()
    console.log(res);
    
    return Response.json("OK")
  } catch (error) {
    return new Response(`Error`, { status: 400 })
  }
  
}


