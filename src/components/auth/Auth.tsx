"use client";
import React, { useCallback, useState } from "react";

import { GoogleAuth } from "./GoogleAuth";
import AuthSignIn from "./AuthSignIn";
import AuthSignUp from "./AuthSignUp";
import Link from "next/link";

const Auth = () => {
  const [variant, setVariant] = useState<"login" | "register">("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="">
        <h2 className="text-primary text-2xl md:text-3xl font-bold">
          {variant === "login" ? "Entre na sua conta" : "Registe-se agora"}
        </h2>
        <span className="text-primary text-sm font-bold">
          com seu {variant === "login" ? "email registrado" : "melhor email"}
        </span>
      </div>

      {variant === "login" ? <AuthSignIn /> : <AuthSignUp />}

      <p className="text-[12px]">
        {variant === "login" ? "Ainda não tem uma conta?" : "Já tem uma conta?"}
        <span
          className="text-primary cursor-pointer ml-2"
          onClick={toggleVariant}
        >
          Clique aqui.
        </span>
      </p>
      {variant === "login" && 
        <p className="text-[12px]">
          Esqueci a minha senha
          <Link href={"/recovery-password"}
            className="text-primary cursor-pointer ml-2"
            >
            Clique aqui.
          </Link>
        </p>
      }
      <div className="flex items-center text-[12px] gap-5">
        <div className="bg-gray-300 h-[1px] w-full"></div>
        <span>ou</span>
        <div className="bg-gray-300 h-[1px] w-full"></div>
      </div>
      <GoogleAuth />
    </div>
  );
};

export default Auth;
