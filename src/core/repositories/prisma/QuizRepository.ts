import { PrismaClient, Quiz } from "@prisma/client";

export class QuizRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(): Promise<Quiz[]> {
    const allQuiz = await this.prisma.quiz.findMany({
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
        favorites: true
      },
    });
    return allQuiz;
  }

  async getAllFavorites(userId: number): Promise<Quiz[]> {
    const allQuiz = await this.prisma.quiz.findMany({
      where: {
        favorites: {
          some: {
            userId,
          },
        },
      },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
        favorites: true
      },
    });

    return allQuiz;
  }

  async findOne(id: number) {
    const quiz = await this.prisma.quiz.findUnique({
      where: {
        id,
      },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
        favorites: true
      },
    });

    return quiz;
  }

  async favorite(quizId: number, userId: number) {
    const isFavorite = await this.prisma.favorite.findFirst({
      where: {
        userId,
        quizId,
      },
    });
    if (isFavorite) {
      await this.prisma.favorite.deleteMany({
        where: {
          userId,
          quizId,
        },
      });
      return false;
    } else {
      await this.prisma.favorite.create({
        data: {
          userId,
          quizId,
        },
      });
      return true;
    }
  }
}
