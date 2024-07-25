"use client"

import { Quiz } from "@/types/quiz";
import { create } from "zustand"

type Question = {
    quiz?: Quiz;
    isOpen: boolean;
    onOpen: (quiz: object) => void;
    onClose: () => void;
}

export const useQuestionModal = create<Question>((set) => ({
    quiz: undefined,
    isOpen: false,
    onOpen: (quiz: any) => set({ isOpen: true, quiz}),
    onClose: () => set({ isOpen: false, quiz: undefined})
}))