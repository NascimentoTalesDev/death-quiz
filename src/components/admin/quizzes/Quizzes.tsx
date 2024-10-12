import { QuizTable } from '@/components/admin/quizzes/QuizTable'
import getAllQuizzesAmin from '../../../app/admin/dashboard/quizzes/new-quiz/actions'

const Quizzes = async () => {
    const allQuizzes = await getAllQuizzesAmin()

    return (
        <QuizTable allQuizzes={allQuizzes} />
    )
}

export default Quizzes