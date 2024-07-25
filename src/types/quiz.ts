export type Quiz = {
    id: string,
    image: string,
    title: string,
    questions: [
        {
            id: string
            question: string
            answers: string[],
            correctAnswer: string
        }
    ] 
}