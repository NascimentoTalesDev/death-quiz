"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  text: z.string().min(1, {
    message: "O campo não pode ser vazio.",
  }),
});

const SearchQuiz = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
    } catch (error) {}
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3">
          <div className="w-full">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Digite aqui sua busca..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="">
            <Button
              className="w-full"
              type={"submit"}
              variant={"default"}
              disabled={!isValid || isSubmitting}
            >
              Buscar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchQuiz;
