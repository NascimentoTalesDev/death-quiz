import { UserService } from "../services/UserService";

export class UserController {
    userService: UserService;

    constructor() {
        this.userService = new UserService()
    }
    
    async signIn (email: string, password: string) {
        const user = await this.userService.signIn(email, password)
        return user
        
    }

    signOut () {

    }

    async signUp (name: string, email: string, password: string ){
        const user = await this.userService.signUp(name, email, password)
        return user
    }

    async findById (userId: number ){
        const user = await this.userService.findById(userId)
        return user
    }

}