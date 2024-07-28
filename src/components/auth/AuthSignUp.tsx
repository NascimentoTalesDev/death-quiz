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
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import signUpUser from "@/app/auth/actions";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Por favor, digite seu nome.",
  }),
  email: z.string().email().min(1, {
    message: "Por favor, digite seu email.",
  }),
  password: z.string().min(1, {
    message: "Por favor, digite sua senha.",
  }),
});

const AuthSignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await signUpUser(values)
      toast.success("Usuário cadastrado com sucesso")
    } catch (error) {
      toast.error("Ocorreu um erro inesperado")
    }
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome:</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="Digite seu nome"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[12px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    disabled={isSubmitting}
                    placeholder="Digite seu email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[12px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha:</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="Digite sua senha"
                    {...field}
                  />
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
              disabled={!isValid || isSubmitting}
            >
              Registrar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AuthSignUp;
