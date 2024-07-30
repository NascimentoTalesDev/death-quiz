"use client";

import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { favoriteQuiz } from "@/app/dashboard/quiz/[id]/actions";
import { Favorite, Quiz, User } from "@prisma/client";
import toast from "react-hot-toast";

interface FavoriteQuizProps {
  user: User;
  quiz: Quiz & { favorites: Favorite[] } 
}

const FavoriteQuiz = ({ quiz, user }: FavoriteQuizProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavoriteQuiz = async () => {
    try {
      let res = await favoriteQuiz(quiz.id, user.id);
      setIsFavorite(res);
      toast.success("ATUALIZADO");
    } catch (error) {
      toast.error("ERROR");
    }
  };

  return (
    <div title="Favorito">
      {isFavorite ? (
        <Heart
          className={`cursor-pointer text-red-500`}
          onClick={toggleFavoriteQuiz}
        />
      ) : (
        <Heart
          className={`cursor-pointer`}
          onClick={toggleFavoriteQuiz}
        />
      )}
    </div>
  );
};

export default FavoriteQuiz;
