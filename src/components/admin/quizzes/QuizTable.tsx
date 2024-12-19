import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Favorite, Question, Quiz } from '@prisma/client'
import Image from 'next/image';
import Actions from './quizId/Actions';

interface QuizTableProps {
    allQuizzes: (Quiz & { questions: Question[] ,favorites: Favorite[] })[];
}

export const QuizTable = ({ allQuizzes }: QuizTableProps) => {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[80px]">Imagem</TableHead>
                    <TableHead>Título</TableHead>
                    <TableHead className='text-center w-fit'>Qtd. Perguntas</TableHead>
                    <TableHead className='text-center w-fit'>Publicado</TableHead>
                    <TableHead className='text-center w-fit'>Favoritado</TableHead>
                    <TableHead className="text-right">Edit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {allQuizzes.length > 0 && allQuizzes.map(quiz => (
                    <TableRow key={quiz?.id}>
                        <TableCell className="font-medium py-2">
                            <div className='relative rounded-md border-2 border-primary overflow-hidden w-[100px] h-[60px]'>
                                <Image src={quiz?.image} alt='' objectFit='cover' fill />
                            </div>
                        </TableCell>
                        <TableCell>{quiz?.title}</TableCell>
                        <TableCell className='text-center'>{quiz?.questions?.length}</TableCell>
                        <TableCell className='text-center'>{quiz?.isPublished ? "Sim" : "Não" }</TableCell>
                        <TableCell className='text-center'>{quiz?.favorites?.length}</TableCell>
                        <TableCell className="text-right">
                            <Actions quiz={quiz} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}
