import { auth } from "@/app/services/auth";

export const useCurrentUser = async ()  => {
    const session = await auth()        

    return session?.user
}