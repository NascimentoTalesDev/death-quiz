"use client";

import { Button } from "@/components/ui/button";
import { GameController } from "@/core/controllers/GameController";
import { useConfetti } from "@/hooks/useConfetti";
import { useQuestionModal } from "@/hooks/useQuestionModal";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const QuestionModalProvider = () => {
  const confetti = useConfetti();
  const questionModal = useQuestionModal();
  const quiz = questionModal?.quiz;
  const gameController: GameController = questionModal?.gameController;

  const [showAnswer, setShowAnswer] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const [endGame, setEndGame] = useState(false);
  const [youAreDead, setYouAreDead] = useState(false);

  if (!questionModal.isOpen) return null;

  const checkAnswer = (answer: string, correctAnswer: string) => {
    const answerConfirmation = gameController.checkAnswer(
      answer,
      correctAnswer
    );

    setShowAnswer(true);

    setTimeout(() => {
      setShowAnswer(false);

      if (answerConfirmation) {
        toast.success("JOGADOR AVANÇA");

        nextQuestion();
      } else {
        toast.error("JOGADOR ELIMINADO");
        setYouAreDead(true);
      }
    }, 1000);
  };

  const nextQuestion = () => {
    let res = gameController.nextQuestion();
    if (res.next) {
      setCurrentQuestion(res?.current);
    } else {
      confetti.onOpen();
      setEndGame(true);
      console.log("FIM");
    }
  };

  const clear = () => {
    setYouAreDead(false);
    setEndGame(false);
    setShowAnswer(false);
    gameController.currentQuestion = 0;
    setCurrentQuestion(0);
  };

  return (
    <div className="absolute flex px-4 justify-center items-center h-full w-full z-[1] bg-background_rgba backdrop-blur-sm">
      <div className="relative bg-gray-200 w-full max-w-[500px] border rounded-lg p-5">
        <Button
          onClick={() => {
            questionModal.onClose(), clear();
          }}
          className="absolute top-2 right-2"
          variant="ghost"
        >
          <X />
        </Button>

        <div className="text-center mb-4">
          <h2 className="font-bold text-lg text-primary">
            {youAreDead ? (
              "Você está Morto"
            ) : (
              <>
                {endGame
                  ? "Parabéns Fim de Jogo"
                  : `Questão ${currentQuestion + 1} / ${
                      gameController.totalQuestion
                    }`}
              </>
            )}
          </h2>
        </div>

        {youAreDead ? (
          <div className="flex flex-col h-full gap-10 justify-center items-center">
            <div>
              <Image src="/images/group.png" alt="" height={300} width={300} />
            </div>
            <Button onClick={() => toast.error("Lembre-se você está MORTO!")}>
              Tentar Novamente
            </Button>
          </div>
        ) : (
          <>
            {!endGame ? (
              <div className="flex flex-col">
                <div className="mb-10">
                  <h2>{quiz?.questions[currentQuestion]?.question}</h2>
                </div>

                <div className="flex flex-col gap-4">
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
                            className={`border border-gray-300 min-h-[55px] justify-start ${
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
            ) : (
              <div className="flex flex-col h-full gap-10 justify-center items-center">
                <h2 className="font-bold text-primary text-2xl text-center">
                  Podemos estar devendo, mas não merecemos morrer por isso.
                </h2>
                <div className="border">
                  <Image
                    src="/images/premio.png"
                    alt=""
                    height={150}
                    width={150}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionModalProvider;
