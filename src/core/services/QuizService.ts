import { QuizRepository } from "../repositories/prisma/QuizRepository";

export class QuizService{
    private  quizRepository: QuizRepository;

    constructor(){
        this.quizRepository = new QuizRepository()
    }

    async getAll(){
        const allQuizzes = await this.quizRepository.getAll() 
        return allQuizzes;
    }

    async getAllFavorites(userId: number){
        const allQuizzes = await this.quizRepository.getAllFavorites(userId) 
        return allQuizzes;
    }

    async findOne(id: number){
        const quiz = await this.quizRepository.findOne(id) 
        return quiz;
    }

    async favorite(quizId: number, userId: number){
        const quiz = await this.quizRepository.favorite(quizId, userId) 
        return quiz;
    }

}