"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { favoriteQuiz } from "@/app/dashboard/quiz/[id]/actions";
import { Favorite, Quiz, User } from "@prisma/client";
import toast from "react-hot-toast";

interface FavoriteQuizProps {
    className?: string;
  user: User;
  quiz: Quiz;
}

const FavoriteQuiz = ({ className, quiz, user }: FavoriteQuizProps) => {

  const toggleFavoriteQuiz = async () => {
    try {
      await favoriteQuiz(quiz.id, user.id);
      toast.success("ATUALIZADO");
    } catch (error) {
      toast.error("ERROR");
    }
  };

  return (
    <div title="Favorito">
      <Heart className={className}
        onClick={toggleFavoriteQuiz}
      />
    </div>
  );
};

export default FavoriteQuiz;
