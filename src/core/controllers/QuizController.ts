import { Quiz } from "@/types/quiz";
import { QuizService } from "../services/QuizService";

export class QuizController {
    private  quizService: QuizService;

  constructor() {
    this.quizService = new QuizService()
  }

  findOne(id: string){
    return this.quizService.findOne(id);
  }
}
