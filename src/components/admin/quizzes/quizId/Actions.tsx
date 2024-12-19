"use client"
import { deleteQuiz } from '@/app/admin/dashboard/quizzes/[id]/actions';
import { deleteImage } from '@/app/admin/dashboard/quizzes/new-quiz/actions';
import { Button } from '@/components/ui/button'
import { Quiz } from '@prisma/client';
import { SquarePen, Trash } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { withSwal } from 'react-sweetalert2';

interface ActionsProps {
  quiz: Quiz;
  swal: ReturnType<typeof withSwal>;
}

const Actions: React.FC<ActionsProps> = ({ quiz, swal }) => {

  const alertMessage = async (quiz: Quiz) => {
    (swal as unknown as { fire: (options: { title: string; text: string; showCancelButton: boolean; confirmButtonText: string; confirmButtonColor: string; cancelButtonText: string; reverseButtons: boolean }) => Promise<{ isConfirmed: boolean }> }).fire({
      title: 'Você tem certeza?',
      text: `Quer excluir o quiz "${quiz.title}"?`,
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      confirmButtonColor: "#b91c1c",
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    }).then(async (result: { isConfirmed: boolean }) => {
      if (result.isConfirmed) {
        await deleteQuiz(quiz?.id)
        await deleteImage(quiz.image)
        toast.success("Quiz Excluido com sucesso!")
      }
    }).catch((error: unknown) => {
      console.log(error);
    });
  }

  return (
    <div className='flex items-center gap-4'>
      <Link href={`/admin/dashboard/quizzes/${quiz?.id}`}>
        <Button className='p-2' variant={"default"}>
          <SquarePen />
        </Button>
      </Link>
      <Button className='p-2' variant={"destructive"} onClick={() => alertMessage(quiz)}>
        <Trash />
      </Button>
    </div>
  )
}

export default withSwal((props: { quiz: Quiz; swal: ReturnType<typeof withSwal> }) => (
  <Actions quiz={props.quiz} swal={props.swal} />
));