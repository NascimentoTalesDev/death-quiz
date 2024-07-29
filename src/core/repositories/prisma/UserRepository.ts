import { PrismaClient } from "@prisma/client";

export class UserRepository  {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async signIn (email: string) {
        try {
            const user = await this.prisma.user.findUnique({
                where:{
                    email
                }
            }) 
            if (!user) {
                throw new Error();
            }
            
            return user
        } catch (error) {
            throw new Error();
        }
    }
    signOut () {

    }

    async signUp (name: string, email: string, hash: string ) {
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
                    hash
                }
            })
         
            return user
        } catch (error) {
            console.error(error);
            throw new Error();
        }
    }
}