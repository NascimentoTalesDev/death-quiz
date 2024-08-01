import { Prisma, PrismaClient, Quiz } from "@prisma/client";

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
        favorites: true,
        liked: true,
        unLiked: true,
      },
    });
    return allQuiz;
  }

  async getLatestQuizzesAdded(): Promise<Quiz[]> {
    const allQuiz = await this.prisma.quiz.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
        favorites: true,
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
        favorites: true,
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
        favorites: true,
        liked: true,
        unLiked: true,
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

  async like(quizId: number, userId: number) {
    const isLiked = await this.prisma.likedQuizzes.findFirst({
      where: {
        userId,
        quizId,
      },
    });
    if (isLiked) {
      await this.prisma.likedQuizzes.deleteMany({
        where: {
          userId,
          quizId,
        },
      });
      return false;
    } else {
      await this.prisma.$transaction(
        async (prisma) => {
          await prisma.unLikedQuizzes.deleteMany({
            where: {
              userId,
              quizId,
            },
          });
          await prisma.likedQuizzes.create({
            data: {
              userId,
              quizId,
            },
          });
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted }
      );  
      return true;
    }
  }

  async unLike(quizId: number, userId: number) {
    const isUnLiked = await this.prisma.unLikedQuizzes.findFirst({
      where: {
        userId,
        quizId,
      },
    });
    if (isUnLiked) {
      await this.prisma.unLikedQuizzes.deleteMany({
        where: {
          userId,
          quizId,
        },
      });
      return false;
    } else {
      await this.prisma.$transaction(
        async (prisma) => {
          await prisma.likedQuizzes.deleteMany({
            where: {
              userId,
              quizId,
            },
          });
          await prisma.unLikedQuizzes.create({
            data: {
              userId,
              quizId,
            },
          });
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted }
      );
      return true;
    }
  }
}
