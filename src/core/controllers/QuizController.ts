import { QuizService } from "../services/QuizService";

export class QuizController {
  private quizService: QuizService;

  constructor() {
    this.quizService = new QuizService();
  }

  async getAll() {    
    return this.quizService.getAll();
  }
  async getLatestQuizzesAdded() {    
    return this.quizService.getLatestQuizzesAdded();
  }

  async getAllFavorites(userId: number) {    
    return this.quizService.getAllFavorites(userId);
  }

  async findOne(id: number) {
    return await this.quizService.findOne(id);
  }

  async favorite (quizId: number, userId: number ){
    const favoriteUpdated = await this.quizService.favorite(quizId, userId)
    return favoriteUpdated
  }
  
  async like (quizId: number, userId: number ){
    const likeUpdated = await this.quizService.like(quizId, userId)
    return likeUpdated
  }
  
  async unLike (quizId: number, userId: number ){
    const unLikeUpdated = await this.quizService.unLike(quizId, userId)
    return unLikeUpdated
  }
}
