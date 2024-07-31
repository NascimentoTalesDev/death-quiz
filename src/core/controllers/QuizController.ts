import { QuizService } from "../services/QuizService";

export class QuizController {
  private quizService: QuizService;

  constructor() {
    this.quizService = new QuizService();
  }

  async getAll() {    
    return this.quizService.getAll();
  }

  async getAllFavorites(userId: number) {    
    return this.quizService.getAllFavorites(userId);
  }

  async findOne(id: number) {
    return await this.quizService.findOne(id);
  }

  async favorite (quizId: number, userId: number ){
    const user = await this.quizService.favorite(quizId, userId)
    return user
}
}
