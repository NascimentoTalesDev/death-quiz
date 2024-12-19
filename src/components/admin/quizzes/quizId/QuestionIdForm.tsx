"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Circle, Loader, Trash, X } from "lucide-react";
import { Answer, Question } from "@prisma/client";
import { updateQuestion, deleteQuestion } from "@/app/admin/dashboard/quizzes/[id]/questions/actions";

const formSchema = z.object({
    question: z.string().min(1, {
        message: "Por favor, digite o título.",
    }),
    answers: z.array(z.object({
        text: z.string().min(1, {
            message: "Por favor, digite a opção resposta.",
        }),
    })),
});

interface QuestionIdFormProps {
    question: Question;
    answers: Answer[];
}

const QuestionIdForm = ({ question, answers }: QuestionIdFormProps) => {
    const correctAnswerIndex = answers.findIndex(
        (answer) => answer.answer === question.correctAnswer
    );

    const [isSaving, setIsSaving] = useState(false);
    const [correctAnswerNumber, setCorrectAnswerNumber] = useState<number | null>(
        correctAnswerIndex !== -1 ? correctAnswerIndex : null
    );

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            question: question?.question,
            answers: answers
                ? answers.map((answer) => ({ text: answer.answer }))
                : [{ text: " " }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "answers",
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (correctAnswerNumber === undefined) {
            toast.error("Selecione a opção de resposta correta");
            return;
        }

        const correctAnswer =
            correctAnswerNumber !== null ? values.answers[correctAnswerNumber]?.text : null;
        if (!correctAnswer) {
            toast.error("Marque a resposta correta");
            return;
        }

        setIsSaving(true);
        const updatedValues = {
            ...values,
            correctAnswer,
            questionId: question.id,
            quizId: question.quizId
        };

        try {
            await updateQuestion(updatedValues)
            toast.success("Pergunta atualizada com sucesso");
        } catch (error) {
            toast.error("Ocorreu um erro inesperado");
        }
        setIsSaving(false);
    };

    const removeQuestion = async() => {
        try {
            if (question.quizId && question.id) {
                await deleteQuestion(question.quizId, question.id)
                toast.success("Pergunta excluida com sucesso");
            }
        } catch (error) {
            toast.error("Ocorreu um erro inesperado");
        }
        setIsSaving(false);
    }

    const addAnswers = () => {
        if (fields.length >= 4) {
            toast.error("Você atingiu o máximo de respostas");
            return;
        }
        append({ text: "" });
    };

    const removeAnswers = (idx: number) => {
        if (fields.length <= 2) {
            toast.error("Este é o mínimo de respostas");
            return;
        }
        remove(idx);
    };

    return (
        <div className="w-full mt-5">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col "
                >
                    <FormField
                        control={form.control}
                        name="question"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pergunta:</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        disabled={isSubmitting}
                                        placeholder="Wandinha"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-[12px]" />
                            </FormItem>
                        )}
                    />
                    <div className="my-3">
                        <Button type="button" onClick={addAnswers}>
                            Add resposta
                        </Button>
                        {fields.length > 0 &&
                            fields.map((field, idx) => (
                                <div
                                    key={field.id}
                                    className="flex mt-3 items-center justify-center w-full gap-2"
                                >
                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name={`answers.${idx}.text`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            type="text"
                                                            disabled={isSubmitting}
                                                            placeholder={`Resposta ${idx + 1}`}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-[12px]" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <Button
                                        title="Resposta Certa"
                                        variant={
                                            correctAnswerNumber === idx
                                                ? "default"
                                                : "secondary"
                                        }
                                        type="button"
                                        onClick={() => setCorrectAnswerNumber(idx)}
                                    >
                                        {correctAnswerNumber === idx ? <Check /> : <Circle />}
                                    </Button>
                                    <Button
                                        title="Excluir"
                                        variant={"destructive"}
                                        type="button"
                                        onClick={() => removeAnswers(idx)}
                                    >
                                        <Trash />
                                    </Button>
                                </div>
                            ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-3 ">
                        <Button
                            className="w-full"
                            type={"submit"}
                            variant={"default"}
                            disabled={!isValid || isSubmitting || isSaving}
                        >
                            {isSaving ? <Loader className="animate-spin" /> : "Salvar"}
                        </Button>
                        <Button
                            onClick={removeQuestion}
                            className="w-full"
                            type={"button"}
                            variant={"destructive"}
                            disabled={!isValid || isSubmitting || isSaving}
                        >
                            {isSaving ? <Loader className="animate-spin" /> : "Excluir"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default QuestionIdForm;
