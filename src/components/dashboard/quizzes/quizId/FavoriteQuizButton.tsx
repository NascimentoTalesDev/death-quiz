"use client";

import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { favoriteQuiz } from "@/app/dashboard/quizzes/[id]/actions";
import { Favorite, Quiz } from "@prisma/client";
import toast from "react-hot-toast";

interface FavoriteQuizButtonProps {
  userId: number;
  quiz: Quiz & { favorites: Favorite[] };
}

const FavoriteQuizButton = ({ quiz, userId }: FavoriteQuizButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavoriteQuiz = async () => {
    try {
      let res = await favoriteQuiz(quiz.id, userId);
      if(res){
        toast.success("Adicionado à lista de favoritos");
      }else{
        toast.success("Removido da lista de favoritos");
      }
      setIsFavorite(res)
    } catch (error) {
      toast.error("Erro ao atualizar");
    }
  };

  useEffect(() => {
    const checkIsFavorite = () => {
      const isFavorite = quiz?.favorites?.some((favorite) => favorite.userId === userId);
      setIsFavorite(isFavorite);
    };
    checkIsFavorite();
  }, [quiz.favorites, userId]);

  
  return (
    <div title="Favorito">
      <Heart
        fill={isFavorite ? "#16a34a" : "none"}
        className={`cursor-pointer ${isFavorite && "text-[#16a34a]"}`}
        onClick={toggleFavoriteQuiz}
      />
    </div>
  );
};

export default FavoriteQuizButton;
