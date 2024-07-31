"use client";

import Stopwatch from "@/components/dashboard/quiz/Stopwatch";
import { Button } from "@/components/ui/button";
import { GameController } from "@/core/controllers/GameController";
import { useConfetti } from "@/hooks/useConfetti";
import { useQuestionModal } from "@/hooks/useQuestionModal";
import formatFirstWordToUpperCase from "@/lib/formatFirstWordToUpperCase";
import { X } from "lucide-react";
import Image from "next/image";
import {  useState } from "react";
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

  const checkAnswer = (answer: string, correctAnswer: string) => {
    let answerConfirmation = gameController.checkAnswer(answer, correctAnswer);

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
    }, 1100);
  };

  const timeOver = () => {
    setYouAreDead(true);
  };

  const nextQuestion = () => {
    let res = gameController.nextQuestion();
    if (res.next) {
      setCurrentQuestion(res?.current);
    } else {
      confetti.onOpen();
      setEndGame(true);
    }
  };

  const clear = () => {
    gameController.stopMusic();
    setYouAreDead(false);
    setEndGame(false);
    setShowAnswer(false);
    gameController.currentQuestion = 0;
    gameController.timer = 0;
    setCurrentQuestion(0);
  };

  if (!questionModal.isOpen) return null;

  return (
    <div className="absolute  flex px-4 justify-center items-center h-full w-full z-[1] bg-background_rgba backdrop-blur-sm">
      <div className="relative bg-gray-200 w-full max-w-[500px] border rounded-lg p-5">
        <Button
          onClick={() => {
            questionModal.onClose(), clear();
          }}
          className="absolute top-2 right-2 dark:text-background dark:hover:text-accent-foreground"
          variant="ghost"
        >
          <X />
        </Button>
        {!endGame && !youAreDead && (
          <div className="absolute top-6 left-5 dark:text-background dark:hover:text-accent-foreground">
            <Stopwatch
              gameController={gameController}
              yourTimeIsOver={timeOver}
            />
          </div>
        )}

        <div className="text-center mb-4">
          <h2 className="font-bold dark:text-background text-lg text-primary">
            {youAreDead ? (
              "Você está Morto"
            ) : (
              <>
                {endGame
                  ? "Parabéns Fim de Jogo"
                  : `Questão ${currentQuestion + 1} / ${
                      gameController.totalQuestions
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
                <div className="mb-10 dark:text-background">
                  <h2>{quiz?.questions[currentQuestion]?.question}</h2>
                </div>

                <div className="flex flex-col gap-4 dark:text-background">
                  {showAnswer ? (
                    <>
                      {quiz?.questions[currentQuestion]?.answers.map(
                        (item, idx) => (
                          <Button
                            value={item?.answer}
                            variant={"ghost"}
                            className={`border min-h-[55px] justify-start ${
                              item?.answer ===
                              quiz?.questions[currentQuestion]?.correctAnswer
                                ? "border-green-500"
                                : "border-red-500"
                            }`}
                            key={idx}
                          >
                            {formatFirstWordToUpperCase(item?.answer)}
                          </Button>
                        )
                      )}
                    </>
                  ) : (
                    <>
                      {quiz?.questions[currentQuestion]?.answers.map(
                        (item, idx) => (
                          <Button
                            onClick={() =>
                              checkAnswer(
                                item?.answer,
                                quiz?.questions[currentQuestion]?.correctAnswer
                              )
                            }
                            value={item.answer}
                            variant={"ghost"}
                            className={`border border-gray-300 min-h-[55px] justify-start ${
                              showAnswer ? "border-red-500" : ""
                            }`}
                            key={idx}
                          >
                            {item?.answer}
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
