export type Quiz = {
  id: number;
  image: string;
  title: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
  questions: [
    {
      id: number;
      question: string;
      correctAnswer: string;
      quizId: number | null;
      answers: [
        {
          id: number;
          answer: string;
          questionId: number;
        }
      ];
    }
  ];
};
