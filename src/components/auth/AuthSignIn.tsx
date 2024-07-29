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
import { CheckboxItem } from "../CheckboxItem";
import { signInUser } from "@/app/auth/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
  email: z.string().email().min(1, {
    message: "Por favor, digite seu email.",
  }),
  password: z.string().min(1, {
    message: "Por favor, digite sua senha.",
  }),
});

const AuthSignIn = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await signInUser(values)
      router.replace("/dashboard")
      toast.success("Usuário autenticado com sucesso")
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
                    type="password"
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
              Entrar
            </Button>
          </div>
          <CheckboxItem text="Manter-me conectado" />
        </form>
      </Form>
    </div>
  );
};

export default AuthSignIn;
