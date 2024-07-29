import { User } from "@prisma/client";

export interface Encrypter {
    encrypt (user: User): Promise<string>;
} 