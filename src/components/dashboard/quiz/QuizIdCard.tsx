// "use client";

import React from "react";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Quiz } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useQuestionModal } from "@/hooks/useQuestionModal";
import { GameController } from "@/core/controllers/GameController";
import Back from "../Back";
import getQuizById from "@/app/dashboard/quiz/[id]/actions";
import ButtonStartQuiz from "./ButtonStartQuiz";
import formatFirstWordToUpperCase from "@/lib/formatFirstWordToUpperCase";

interface QuizProps {
  id: string;
}

const QuizIdCard = async ({ id }: QuizProps) => {
  const quiz: Quiz = await getQuizById(id)

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 items-center mb-5">
        <Back />
        <div className="text-center md:text-left md:w-full">
          <h1 className="text-xl font-bold">{formatFirstWordToUpperCase(quiz?.title)}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <Card className="relative h-[250px] rounded-xl overflow-hidden">
            <Image
              src={`/images/${quiz?.image}`}
              alt=""
              objectFit="cover"
              fill
            />
            <div className="absolute flex flex-col p-5 justify-between w-full h-full">
              <div className="bg-white dark:bg-gray-500 text-sm w-fit p-1 rounded-md">
                <span>{quiz?.questions?.length} quest.</span>
              </div>
              <div className="backdrop-blur-sm flex text-white px-1 py-2 rounded-md">
                <CardTitle className="text-lg font-normal">
                  {formatFirstWordToUpperCase(quiz?.title)}
                </CardTitle>
              </div>
            </div>
          </Card>
          <div className="descricao">
            <div className="flex items-center justify-between">
              <h2>Mais informações (DESCRIÇÃO)</h2>
              <div className="flex gap-3">
                <AiOutlineLike className="cursor-pointer h-6 w-6" />
                <Heart className="cursor-pointer" />
                <AiOutlineDislike className="cursor-pointer h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>Nível de dificuldade: 2</div>
          <div>Pontos: 30</div>
          <div>Categoria: Séries </div>
          <ButtonStartQuiz quiz={quiz} />
        </div>
      </div>
    </>
  );
};

export default QuizIdCard;
