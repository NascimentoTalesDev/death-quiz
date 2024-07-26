import { PrismaClient, Quiz } from "@prisma/client";

export class QuizRepository  {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Quiz[]> {
        const allQuiz = await this.prisma.quiz.findMany({
            include: {
                questions: {
                    include: {
                        answers: true
                    }
                }
            }
         })  
            
        return allQuiz;
    }
    
    async findOne(id: number){
        const quiz = await this.prisma.quiz.findUnique({
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