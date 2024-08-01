import { QuizController } from "@/core/controllers/QuizController";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const quizId = searchParams.get("quizId");
  const userId = searchParams.get("userId");
  
  if (quizId && userId) {
    const id = parseInt(quizId);
    const user = parseInt(userId);

    try {
      const quizController = new QuizController();
      const quizUpdated = await quizController.unLike(id, user);

      return Response.json(quizUpdated);
    } catch (error) {
      return new Response(`Error`, { status: 400 });
    }
  }
}
