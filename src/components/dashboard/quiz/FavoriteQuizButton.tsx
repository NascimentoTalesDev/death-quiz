"use client";

import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { favoriteQuiz } from "@/app/dashboard/quiz/[id]/actions";
import { Favorite, Quiz, User } from "@prisma/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface FavoriteQuizButtonProps {
  user: User;
  quiz: Quiz & { favorites: Favorite[] };
}

const FavoriteQuizButton = ({ quiz, user }: FavoriteQuizButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavoriteQuiz = async () => {
    try {
      let res = await favoriteQuiz(quiz.id, user.id);
      if(res){
        toast.success("Adicionado à lista de favoritos");
      }else{
        toast.error("Removido da lista de favoritos");
      }
      setIsFavorite(res)
    } catch (error) {
      toast.error("Error ao atualizar");
    }
  };

  useEffect(() => {
    const checkIsFavorite = () => {
      const isFavorite = quiz.favorites.some((favorite) => favorite.userId === user.id);
      setIsFavorite(isFavorite);
    };
    checkIsFavorite();
  }, [quiz.favorites, user.id]);

  
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
