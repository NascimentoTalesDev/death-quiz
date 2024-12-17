"use client";

import React, { useEffect, useState } from "react";
import { likeQuiz } from "@/app/dashboard/quizzes/[id]/actions";
import { LikedQuizzes, Quiz, User } from "@prisma/client";
import toast from "react-hot-toast";
import { ThumbsUp } from "lucide-react";

interface LikeQuizButtonProps {
  userId: number;
  quiz: Quiz & { liked: LikedQuizzes[] };
}

const LikeQuizButton = ({ quiz, userId }: LikeQuizButtonProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const toggleLikeQuiz = async () => {
    try {
      let res = await likeQuiz(quiz.id, userId);
      toast.success("Gostei atualizado");
      setIsLiked(res)
    } catch (error) {
      toast.error("Error ao atualizar");
    }
  };

  useEffect(() => {
    const checkIsLiked = () => {
      const isLiked = quiz?.liked?.some((like) => like.userId === userId);
      setIsLiked(isLiked);
    };
    checkIsLiked();
  }, [quiz.liked, userId]);

  return (
    <div title="Gostei">
      <ThumbsUp
        fill={isLiked ? "#16a34a" : "none"}
        className={`h-6 w-6 cursor-pointer ${isLiked && "text-[#16a34a]"}`}
        onClick={toggleLikeQuiz}
      />
    </div>
  );
};

export default LikeQuizButton;
