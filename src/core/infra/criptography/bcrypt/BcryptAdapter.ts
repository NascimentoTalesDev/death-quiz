import { Hasher } from "@/core/data/protocols/criptography/hasher";
import bcrypt from "bcrypt"

export class BcryptAdapter implements Hasher {

    private readonly salt: number

    constructor(salt: number) {
        this.salt = salt
    }

    async hash(value: string): Promise<string> {
        const hash = await bcrypt.hash(value, this.salt)        
        return hash
    }
    
    async compare(password: string, hash: string){
        const res = await bcrypt.compare(password, hash)
        console.log("RES COMPARE", res);
                
        return res
    }
}