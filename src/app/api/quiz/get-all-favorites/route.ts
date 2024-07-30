import { QuizController } from "@/core/controllers/QuizController"
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (userId) {
    const id = parseInt(userId)    
    try {
      const quizController = new QuizController()
      const quizzes = await quizController.getAllFavorites(id)
      
      return Response.json(quizzes)
  } catch (error) {
    return new Response(`Error`, { status: 400 })
  }
  }
}



