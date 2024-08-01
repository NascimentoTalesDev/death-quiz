import { auth } from "@/app/services/auth";
import { AuthController } from "@/core/controllers/AuthController";

export const useCurrentUser = async ()  => {
    const session = await auth()
    const authController = new AuthController()
    const user = authController.getCurrentUser()

    return session?.user || user
}