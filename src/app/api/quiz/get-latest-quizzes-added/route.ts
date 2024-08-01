import { QuizController } from "@/core/controllers/QuizController"

export async function GET() {

    try {
        const quizController = new QuizController()
        const quizzes = await quizController.getLatestQuizzesAdded()
        
        return Response.json(quizzes)
    } catch (error) {
      return new Response(`Error`, { status: 400 })
    }
}


