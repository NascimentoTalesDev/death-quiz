"use client"

import React from "react"
import ReactConfetti from "react-confetti"

import { useConfetti } from "../hooks/useConfetti"

export const ConfettiProvider = () => {
    const confetti = useConfetti()
    if (!confetti.isOpen) return null

    return(
        <ReactConfetti
            className="pointer-events-none z-50"
            numberOfPieces={500}
            recycle={false}
            onConfettiComplete={()=> confetti.onClose() }
        />
    )
}