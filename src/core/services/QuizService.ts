import { quizzes } from "@/data/quizzes"
import { Quiz } from "@/types/quiz";

export class QuizService{

    findOne(id: string){
        const quiz = quizzes.find(quiz => quiz.id === id);
        return quiz;
    }
}