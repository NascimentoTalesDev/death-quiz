import { UserRepository } from "../repositories/prisma/UserRepository"
import { BcryptAdapter } from "../infra/criptography/bcrypt/BcryptAdapter"

export class UserService {
    userRepository: UserRepository 
    bcryptAdapter: BcryptAdapter

    constructor() {
        this.userRepository = new UserRepository()
        this.bcryptAdapter = new BcryptAdapter(12)
    }
    
    signIn () {
        return  "OK"
    }

    signOut () {

    }

    async signUp (name: string, email: string, password: string ){

        const hash = await this.bcryptAdapter.hash(password)        
        const user = await this.userRepository.signUp(name, email, hash)
        return user
    }
}