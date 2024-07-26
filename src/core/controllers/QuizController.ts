import { Quiz } from "@/types/quiz";
import { QuizService } from "../services/QuizService";

export class QuizController {
    private  quizService: QuizService;

  constructor() {
    this.quizService = new QuizService()
  }

  async getAll(){
      let item = await this.quizService.getAll();        
      return item 
  }

  async findOne(id: number){
    let item = await this.quizService.findOne(id);
    return item
  }
}
