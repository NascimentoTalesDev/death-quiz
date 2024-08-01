"use client";

import React, { useEffect, useState } from "react";
import { unLikeQuiz } from "@/app/dashboard/quiz/[id]/actions";
import { Quiz, UnLikedQuizzes, User } from "@prisma/client";
import toast from "react-hot-toast";
import { ThumbsDown } from "lucide-react";

interface UnLikeQuizButtonProps {
  user: User;
  quiz: Quiz & { unLiked: UnLikedQuizzes[] };
}

const UnLikeQuizButton = ({ quiz, user }: UnLikeQuizButtonProps) => {
  const [isUnLiked, setIsUnLiked] = useState<boolean>(false);

  const toggleUnLikeQuiz = async () => {
    try {
      let res = await unLikeQuiz(quiz.id, user.id);
      toast.success("Não gostei atualizado");
      setIsUnLiked(res)
    } catch (error) {
      toast.error("Error ao atualizar");
    }
  };

  useEffect(() => {
    const checkIsUnLiked = () => {
      const isUnLiked = quiz?.unLiked?.some((like) => like.userId === user.id);
      setIsUnLiked(isUnLiked);
    };
    checkIsUnLiked();
  }, [quiz.unLiked, user.id]);

  return (
    <div title="Não gostei">
      <ThumbsDown
        fill={isUnLiked ? "#a31616" : "none"}
        className={`h-6 w-6 cursor-pointer ${isUnLiked && "text-[#a31616]"}`}
        onClick={toggleUnLikeQuiz}
      />
    </div>
  );
};

export default UnLikeQuizButton;
