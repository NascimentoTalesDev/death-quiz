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
import React, { useCallback, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CheckboxItem } from "./CheckboxItem";
import { GoogleAuth } from "./GoogleAuth";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Por favor, digite seu email.",
  }),
  password: z.string().min(1, {
    message: "Por favor, digite sua senha.",
  }),
});

const formSchemaRegister = z.object({
  name: z.string().min(1, {
    message: "Por favor, digite seu nome.",
  }),
});

const Auth = () => {
    const [variant, setVariant] = useState("login");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
    } catch (error) {}
  };

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? "register" : "login")
},[])

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="">
        <h2 className="text-primary text-3xl font-bold">{variant === "login" ? "Entre na sua conta" : "Registe-se agora" }</h2>
        <span className="text-primary text-sm font-bold">com seu {variant === "login" ? "email registrado" : "melhor email" }</span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
            {variant === "register" && (
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="Digite seu email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-x-2">
            <Button
                className="w-full"
              type={"submit"}
              variant={"default"}
              disabled={!isValid || isSubmitting}
            >
               {variant === "login" ? "Login" : "Registrar" }
            </Button>
          </div>
            <CheckboxItem text="Manter-me conectado" />
            <p className="text-[12px]">{variant === "login" ? "Ainda não tem uma conta?" : "Já tem uma conta?" }<span className="text-primary cursor-pointer ml-2" onClick={toggleVariant}>Clique aqui.</span></p>
            <div className="flex items-center text-[12px] gap-5">
                <div className="bg-gray-300 h-[1px] w-full"></div>
                <span>ou</span>
                <div className="bg-gray-300 h-[1px] w-full"></div>
            </div>
        </form>
      </Form>
      <GoogleAuth />
    </div>
  );
};

export default Auth;
