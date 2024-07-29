import { Encrypter } from "@/core/data/protocols/criptography/encrypter";
import { User } from "@prisma/client";
import jwt from 'jsonwebtoken';

export class JwtAdapter implements Encrypter {


    constructor() {}

    async encrypt(user: User): Promise<string> {
        const token = jwt.sign({
            id: user.id
    }, process.env.JWT_SECRET || '')
        
        return token
    }

}