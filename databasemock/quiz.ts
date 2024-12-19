const quiz = {
    id: 9,
    image: 'https://death-quiz.s3.amazonaws.com/1734559421364.jpg',
    title: 'Moana',
    isPublished: false,
    createdAt: '2024-12-18T22:03:44.253Z',
    updatedAt: '2024-12-18T22:03:44.253Z',
    questions: [
        {
            id: 10,
            question: '1 qual o nome completo da Moana?',
            correctAnswer: '1 Moana Waialiki',
            quizId: 9,
            answers: [
                { id: 25, answer: '1 Moana Waialiki', questionId: 10 },
                { id: 26, answer: 'Moana De Motunui', questionId: 10 },
                { id: 27, answer: 'Moana Waialikl', questionId: 10 }
            ]
        },
        {
            id: 11,
            question: '2 a família de Moana é:',
            correctAnswer: '2 Vovó Tala , pai Tui e mãe Sina',
            quizId: 10,
            answers: [
                { id: 2, answer: 'Moana De Motunui', questionId: 11 },
                { id: 29, answer: '2 Vovó Tala , pai Tui e mãe Sina', questionId: 11 },
                { id: 30, answer: 'Moana Waialikl', questionId: 11 }
            ]
        },
        {
            id: 12,
            question: '3 os animais de Moana são : ',
            correctAnswer: 'O porco Pua e o galo Heihei 2',
            quizId: 11,
            answers: [
                { id: 31, answer: 'Moana Waialiki', questionId: 12 },
                { id: 32, answer: 'O porco Pua e o galo Heihei 2', questionId: 12 },
                { id: 33, answer: 'Moana Waialikl', questionId: 12 }
            ]
        },
    ],
    favorites: [
        { id: 29, userId: 4, quizId: 9 },
        { id: 30, userId: 2, quizId: 9 }
    ],
    liked: [{ id: 17, userId: 2, quizId: 9 }],
    unLiked: []
}

export function getQuizByIdMock() {
    return quiz
}