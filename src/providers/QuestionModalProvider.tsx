"use client";

import { Button } from "@/components/ui/button";
import { GameController } from "@/core/controllers/GameController";
import { useQuestionModal } from "@/hooks/useQuestionModal";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const QuestionModalProvider = () => {  
  const questionModal = useQuestionModal();
  const quiz = questionModal?.quiz;
  
  const [showAnswer, setShowAnswer] = useState(false)  
  const [next, setNext] = useState(false)  
  
  const gameController = new GameController(quiz?.questions.length as number);

  if (!questionModal.isOpen) return null;

    const checkAnswer = (answer: string, correctAnswer: string) => {
    const res = gameController.checkAnswer(answer, correctAnswer)
    setShowAnswer(true);
    setNext(gameController.nextQuestion());
  }

  return (
    <div className="absolute flex justify-center items-center h-full w-full z-50 bg-background_rgba backdrop-blur-sm">
      <div className="relative bg-gray-200 h-[500px] w-[500px] border rounded-lg p-5">
        <Button
          onClick={() => { questionModal.onClose(), setShowAnswer(false) }}
          className="absolute top-2 right-2"
          variant="ghost"
        >
          <X />
        </Button>

        <div className="flex flex-col">
          <div className="text-center mb-4">
            <h2>Questão {gameController.currentQuestion + 1} / {gameController.totalQuestion} </h2>
          </div>
          <div className="mb-10">
            <h2>{quiz?.questions[gameController.currentQuestion].question}</h2>
          </div>

          <div className="flex flex-col gap-5">
            {showAnswer ?
             <>
                {quiz?.questions[gameController.currentQuestion].answers.map((answer, idx) => (
                <Button value={answer} variant={"ghost"} className={`border min-h-[55px] justify-start ${answer === quiz?.questions[gameController.currentQuestion].correctAnswer  ? "border-green-500" : "border-red-500" }`} key={idx}>
                    {answer}
                </Button>
                ))}
             </>
             :
             <>
                {quiz?.questions[gameController.currentQuestion].answers.map((answer, idx) => (
                <Button onClick={() => checkAnswer(answer, quiz?.questions[gameController.currentQuestion].correctAnswer)} value={answer} variant={"ghost"} className={`border min-h-[55px] justify-start ${showAnswer ? "border-red-500" : "" }`} key={idx}>
                    {answer}
                </Button>
                ))}
             </>
             }
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionModalProvider;
