"use client"

import { Quiz } from "@/types/quiz";
import { create } from "zustand"

type Question = {
    quiz?: Quiz;
    gameController?: any;
    isOpen: boolean;
    onOpen: (quiz: object, gameController: object) => void;
    onClose: () => void;
}

export const useQuestionModal = create<Question>((set) => ({
    quiz: undefined,
    gameController: undefined,
    isOpen: false,
    onOpen: (quiz: any, gameController: any) => set({ isOpen: true, quiz, gameController}),
    onClose: () => set({ isOpen: false, quiz: undefined})
}))