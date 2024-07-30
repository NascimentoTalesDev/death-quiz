import { UserRepository } from "../repositories/prisma/UserRepository"
import { AuthController } from "../controllers/AuthController"

export class UserService {
    userRepository: UserRepository 
    authController: AuthController

    constructor() {
        this.userRepository = new UserRepository()
        this.authController = new AuthController()
    }
    
    async signIn (email: string, password: string) {
        const user = await this.userRepository.signIn(email)
        
        if (user?.hash) {
            const authenticated = await this.authController.compare(password, user?.hash)
            
            if (authenticated){
                const token = await this.authController.encrypter(user)        
                user.token = token
                user.password = null
                user.hash = null 
                return  user
            }
            return undefined
        }
        return undefined
    }

    signOut () {

    }

    async signUp (name: string, email: string, password: string ){

        const hash = await this.authController.hash(password)
        const user = await this.userRepository.signUp(name, email, hash)
        const token = await this.authController.encrypter(user)        
        
        user.token = token
        user.password = null
        user.hash = null        
        
        return user
    }

}