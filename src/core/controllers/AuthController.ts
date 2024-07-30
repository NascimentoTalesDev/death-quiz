import { User } from "@prisma/client"
import { BcryptAdapter } from "../infra/criptography/bcrypt/BcryptAdapter"
import { JwtAdapter } from "../infra/criptography/jwt/JwtAdapter"
import { cookies } from "next/headers"

export class AuthController {
    // loadAccounByEmailREpository
    // hashCompare
    // encrypter
    bcryptAdapter: BcryptAdapter 
    jwtAdapter: JwtAdapter 
    // updateAccessTokenRepository

    constructor(){
        this.bcryptAdapter = new BcryptAdapter(12)
        this.jwtAdapter = new JwtAdapter()
    }

    async hash (password: string){
        const hash = await this.bcryptAdapter.hash(password)
        return hash
    }

    async compare (password: string, hash: string ){
        const res = await this.bcryptAdapter.compare(password, hash)
        return res
        
    }

    async encrypter  (user: User){
        const res = await this.jwtAdapter.encrypt(user)
        return res
    }
    
    async saveSession (token: string){
        const cookieStore = cookies()        
        cookieStore.set('death-quiz', token)
    }

    async saveUser (user: User){
        const cookieStore = cookies()        
        cookieStore.set('user', JSON.stringify(user))
    }

    async getCurrentUser (){
        const cookieStore = cookies()        
        const res = cookieStore.get('user')?.value        
        return JSON.parse(res || '')
    }

    async removeSession (){
        const cookieStore = cookies()        
        cookieStore.delete('death-quiz')
        return true
    }

    async getTokenSession (){
        const cookieStore = cookies()        
        const cookie = cookieStore.get('death-quiz')?.name
        if(cookie) return true
        return false
    }

}