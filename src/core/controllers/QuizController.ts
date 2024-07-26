import { QuizService } from "../services/QuizService";

export class QuizController {
  private quizService: QuizService;

  constructor() {
    this.quizService = new QuizService();
  }

  getAll() {    
    return this.quizService.getAll();
  }

  async findOne(id: number) {
    return await this.quizService.findOne(id);
  }
}
