"use client";

import { Button } from "@/components/ui/button";
import { GameController } from "@/core/controllers/GameController";
import { useQuestionModal } from "@/hooks/useQuestionModal";
import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const QuestionModalProvider = () => {
  const questionModal = useQuestionModal();
  const quiz = questionModal?.quiz;
  const gameController : GameController = questionModal?.gameController;
    console.log("PONTOS", gameController?.totalPoints);
    
  const [showAnswer, setShowAnswer] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const [endGame, setEndGame] = useState(false);

  if (!questionModal.isOpen) return null;

  const checkAnswer = (answer: string, correctAnswer: string) => {
    const answerConfirmation = gameController.checkAnswer(answer, correctAnswer);
    
    setShowAnswer(true);
    
    setTimeout(() => {
        setShowAnswer(false);
        
        if (answerConfirmation) {
            toast.success("JOGADOR 138 AVANÇA")

            nextQuestion()
        }else{
            console.log("JOGADOR ELIMINADO");
        }

    }, 1000);
        
        
  };

  const nextQuestion = () => {
    let res = gameController.nextQuestion()    
    if (res.next) {
        setCurrentQuestion(res?.current);
    }else{
        console.log("FIM");
    }
  };

  const clear = () => {
    setShowAnswer(false);
    gameController.currentQuestion = 0;
    setCurrentQuestion(0)
  };

  return (
    <div className="absolute flex justify-center items-center h-full w-full z-50 bg-background_rgba backdrop-blur-sm">
      <div className="relative bg-gray-200 h-[500px] w-[500px] border rounded-lg p-5">
        <Button
          onClick={() => {
            questionModal.onClose(),
            clear();
          }}
          className="absolute top-2 right-2"
          variant="ghost"
        >
          <X />
        </Button>

        <div className="text-center mb-4">
          <h2>
            Questão {currentQuestion + 1} / {gameController.totalQuestion}
          </h2>
        </div>
        <div className="mb-10">
          <h2>{quiz?.questions[currentQuestion]?.question}</h2>
        </div>
          <Button onClick={nextQuestion}></Button>
        {!endGame && (
          <div className="flex flex-col">

            <div className="flex flex-col gap-5">
              {showAnswer ? (
                <>
                  {quiz?.questions[currentQuestion]?.answers.map(
                    (answer, idx) => (
                      <Button
                        value={answer}
                        variant={"ghost"}
                        className={`border min-h-[55px] justify-start ${
                          answer ===
                          quiz?.questions[currentQuestion]?.correctAnswer
                            ? "border-green-500"
                            : "border-red-500"
                        }`}
                        key={idx}
                      >
                        {answer}
                      </Button>
                    )
                  )}
                </>
              ) : (
                <>
                  {quiz?.questions[currentQuestion]?.answers.map(
                    (answer, idx) => (
                      <Button
                        onClick={() =>
                          checkAnswer(
                            answer,
                            quiz?.questions[currentQuestion]?.correctAnswer
                          )
                        }
                        value={answer}
                        variant={"ghost"}
                        className={`border min-h-[55px] justify-start ${
                          showAnswer ? "border-red-500" : ""
                        }`}
                        key={idx}
                      >
                        {answer}
                      </Button>
                    )
                  )}
                </>
              )}
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default QuestionModalProvider;
