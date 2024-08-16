import React from "react";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Back from "../Back";
import { getQuizById } from "@/app/dashboard/quiz/[id]/actions";
import ButtonStartQuiz from "./ButtonStartQuiz";
import formatFirstWordToUpperCase from "@/lib/formatFirstWordToUpperCase";
import FavoriteQuizButton from "./FavoriteQuizButton";
import { useCurrentUser } from "@/hooks/use-current-user";
import LikeQuizButton from "./LikeQuizButton";
import { ThumbsDown } from "lucide-react";
import UnLikeQuizButton from "./UnLikeQuizButton";

interface QuizProps {
  id: string;
}

const QuizIdCard = async ({ id }: QuizProps) => {
  const quiz = await getQuizById(id);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center mb-5">
        <Back />
        <div className="text-center md:text-left w-full">
          <h1 className="text-xl font-bold">
            {formatFirstWordToUpperCase(quiz?.title)}
          </h1>
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
