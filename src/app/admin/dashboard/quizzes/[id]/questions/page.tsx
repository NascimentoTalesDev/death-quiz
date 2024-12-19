import { Published } from '@/components/admin/quizzes/Published';
import Back from '@/components/dashboard/Back';
import React from 'react';
import QuestionIdForm from '@/components/admin/quizzes/quizId/QuestionIdForm';
import { Answer, Question, Quiz } from '@prisma/client';
import { getQuizById } from '../actions';
import { getQuizByIdMock } from '../../../../../../../databasemock/quiz';
import QuestionsForm from '@/components/admin/quizzes/QuestionsForm';

interface QuizWithQuestions extends Quiz {
  questions: (Question & { answers: Answer[] })[];
}

const QuestionsPage = async ({ params }: { params: { id: string } }) => {
  const quiz: QuizWithQuestions = await getQuizById(params.id);
  // const quiz: QuizWithQuestions = getQuizByIdMock();

  return (
    <div>
      {params.id && (
        <>
          <Back />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quiz?.questions.length > 0 &&
              quiz?.questions.map((question) => (
                <QuestionIdForm
                  key={question?.id}
                  question={question}
                  answers={question.answers}
                />
              ))}
              <QuestionsForm quizId={params.id} />
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionsPage;
