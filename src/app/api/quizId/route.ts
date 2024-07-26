import { QuizController } from "@/core/controllers/QuizController"
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

  const { searchParams } = new URL(request.url);
  const quizId = searchParams.get("id");
  if (quizId) {
    const id = parseInt(quizId)
    
    try {
      const quizController = new QuizController()
      const quizzes = await quizController.findOne(id)
      
      return Response.json(quizzes)
    } catch (error) {
      return new Response(`Error`, { status: 400 })
    }
  }
}


