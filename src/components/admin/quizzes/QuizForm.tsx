"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { createQuiz, upload } from "@/app/admin/dashboard/quizzes/new-quiz/actions";
import UploadFiles from "@/components/UploadFiles";
import { Quiz } from "@prisma/client";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Por favor, digite o título.",
    }),
    image: z.string().min(1, {
        message: "Por favor, insira uma imagem.",
    }).refine((value) => {
        if (!value) return false;
        const extension = value.split('.').pop();
        if (!extension) return false;
        return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg', 'tiff'].includes(extension);
    }, {
        message: "Por favor, insira uma imagem válida.",
    }),
});

const QuizForm = () => {
    const router = useRouter()
    const [isSaving, setIsSaving] = useState(false)
    const [foto, setFoto] = useState<string>()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            image: '',
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onUploadComplete = (link: string) => {
        console.log("IMAGELINK", link);
        setFoto(link)
    }


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSaving(true)
        const updatedValues = {
            ...values,
            image: foto
        }
        
        try {
            const quiz : Quiz = await createQuiz(updatedValues as Quiz)
            router.push(`/admin/dashboard/quizzes/new-quiz/${quiz.id}/questions`)
            toast.success("Quiz criado com sucesso")
        } catch (error) {
            toast.error("Ocorreu um erro inesperado")
        }
        setIsSaving(false)
    };

    return (
        <div className="w-full ">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Título:</FormLabel>
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
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Imagem:</FormLabel>
                                <FormControl>
                                    <div {...field} className="border aspect-video mt-3 w-[280px] rounded-md overflow-hidden">
                                        <UploadFiles  onUploadComplete={onUploadComplete} />
                                    </div>
                                </FormControl>
                                <FormMessage className="text-[12px]" />
                            </FormItem>
                        )}
                    />
                    <div className="my-3">
                        <Button
                            className="w-full"
                            type={"submit"}
                            variant={"default"}
                            disabled={!isValid || isSubmitting || isSaving}
                        >
                            {isSaving ? <Loader className="animate-spin" /> : "Salvar"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default QuizForm;
