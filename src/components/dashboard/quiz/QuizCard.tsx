import React from "react";
import {
  Card,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Quiz } from "@/types/quiz";
import Link from "next/link";
import formatFirstWordToUpperCase from "@/lib/formatFirstWordToUpperCase";

interface QuizProps{
  quiz: Quiz
}

const QuizCard = ({ quiz } : QuizProps  ) => {    
  return (
    <Link href={`/dashboard/quiz/${quiz?.id}`}>
      <Card className="relative h-[250px] rounded-xl overflow-hidden">
          <Image src={`${quiz?.image}`} alt="" objectFit="cover" fill />
        <div className="absolute flex flex-col p-5 justify-between w-full h-full">
          <div className="bg-white dark:bg-gray-500 text-sm w-fit p-1 rounded-md">
            <span>{quiz?.questions?.length} quest.</span>
          </div>
          <div className="backdrop-blur-sm flex justify-center text-white px-1 py-2 rounded-md">
            <CardTitle className="text-lg font-normal">{formatFirstWordToUpperCase(quiz?.title)}</CardTitle>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default QuizCard;
