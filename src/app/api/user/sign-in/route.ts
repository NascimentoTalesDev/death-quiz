import { UserController } from "@/core/controllers/UserController";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const password = searchParams.get("password");

  try {
    if (!email)
      return new Response(`O email não pode ser vazio`, { status: 400 });
    if (!password)
      return new Response(`A senha não pode ser vazia`, { status: 400 });

    const userController = new UserController(
      name || "",
      email || "",
      password || ""
    );

    const user = await userController.signIn(
      email || "",
      password || ""
    );
    
    return Response.json(user)

  } catch (error) {    
    return new Response(`Ocorreu um erro inesperado`, { status: 400 });
  }
}
