"use client";

import { Button } from "@/components/ui/button";
import { GameController } from "@/core/controllers/GameController";
import { useQuestionModal } from "@/hooks/useQuestionModal";
import { Quiz } from "@/types/quiz";
import React from "react";

interface ButtonStartQuizProps {
  quiz: Quiz;
}

const ButtonStartQuiz = ({ quiz }: ButtonStartQuizProps) => {
  const questionModal = useQuestionModal();

  const init = () => {
    const gameController = new GameController(
      quiz.questions.length as number,
      0
    );
    const res = gameController.start();
    
    if (res) {
      questionModal.onOpen(quiz, gameController);
    }
  };

  return (
    <Button onClick={init} className="w-fit mt-3">
      Start Quiz
    </Button>
  );
};

export default ButtonStartQuiz;
