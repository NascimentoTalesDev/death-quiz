import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
  
export const NewQuiz = () => {
  return (
    <Link href={"/admin/dashboard/quizzes/new-quiz"}>
        <Button variant={"secondary"}>NewQuiz</Button>
    </Link>
  )
}
