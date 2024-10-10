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
import { Favorite, Quiz } from '@prisma/client'

interface QuizTableProps {
    allQuizzes: (Quiz & { favorites: Favorite[] })[];
}

export const QuizTable = ({ allQuizzes }: QuizTableProps) => {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Imagem</TableHead>
                    <TableHead>Título</TableHead>
                    <TableHead>Publicado</TableHead>
                    <TableHead>Favoritado</TableHead>
                    <TableHead className="text-right">Edit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {allQuizzes.length > 0 && allQuizzes.map(quiz => (
                    <TableRow key={quiz.id}>

                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>{quiz.title}</TableCell>
                        <TableCell>{quiz.isPublished}</TableCell>
                        <TableCell>{quiz.favorites.length}</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}
