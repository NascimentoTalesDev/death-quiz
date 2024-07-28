import { PrismaClient } from "@prisma/client";
import { User } from "next-auth";

export class UserRepository  {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    signIn () {
        return  "OK"
    }
    signOut () {

    }

    async signUp (name: string, email: string, password: string ) {
        try {
            const userExists = await this.prisma.user.findUnique({
                where:{
                    email
                }
            }) 
            if (userExists) {
                throw new Error();
            } 
    
            const user = await this.prisma.user.create({
                data:{
                    name,
                    email,
                    password,
                }
            })
            
            return user
        } catch (error) {
            console.error(error);
            throw new Error();
        }
    }
}