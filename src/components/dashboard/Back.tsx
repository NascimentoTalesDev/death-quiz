"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { SquareArrowLeft } from "lucide-react";

const Back = () => {
  const path = useRouter();
  return <Button className="hidden w-fit md:flex gap-2 pl-0" variant={"link"} onClick={path.back}><SquareArrowLeft /> Voltar</Button>;
};

export default Back;
