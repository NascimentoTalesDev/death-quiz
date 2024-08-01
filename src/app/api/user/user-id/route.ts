import { UserController } from "@/core/controllers/UserController";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (userId) {
    const id = parseInt(userId)
    
    try {
      const userController = new UserController()
      const user = await userController.findById(id)
      
      return Response.json(user)
    } catch (error) {
      return new Response(`Error`, { status: 400 })
    }
  }
}
