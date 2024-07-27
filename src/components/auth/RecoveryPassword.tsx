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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email().min(1, {
    message: "Por favor, digite seu email.",
  })
});

const RecoveryPassword = () => {
  const [variant, setVariant] = useState<"login" | "register">("login");

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
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="">
        <h2 className="text-primary text-2xl md:text-3xl font-bold">
          Recuperar senha
        </h2>
      </div>
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
          <div className="my-3">
            <Button
              className="w-full"
              type={"submit"}
              variant={"default"}
              disabled={!isValid || isSubmitting}
            >
              Enviar
            </Button>
          </div>
        </form>
      </Form>
      {variant === "login" && 
        <p className="text-[12px]">
          Fazer login
          <Link href={"/auth"}
            className="text-primary cursor-pointer ml-2"
            >
            Clique aqui.
          </Link>
        </p>
      }
    </div>
  );
};

export default RecoveryPassword;
