import { QuizRepository } from "../repositories/QuizRepository";

export class QuizService{
    private  quizRepository: QuizRepository;

    constructor(){
        this.quizRepository = new QuizRepository()
    }

    async getAll(){
         const AllQuiz = await this.quizRepository.quiz.findMany({
            include: {
                questions: {
                    include: {
                        answers: true
                    }
                }
            }
         })   
            
        return AllQuiz;
    }

    async findOne(id: number){
        const quiz = await this.quizRepository.quiz.findUnique({
            where: {
                id 
            },
            include: {
                questions: {
                    include: {
                        answers: true
                    }
                }
            }
         })  
            
        return quiz;
    }
}