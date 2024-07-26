export type Quiz = {
    id: number,
    image: string,
    title: string,
    questions: [
        {
            id: string
            question: string
            answers: [
                {
                    id: number,
                    answer: string,
                    questionId: number
                } 
            ],
            correctAnswer: string
        }
    ] 
}