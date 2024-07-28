import { UserService } from "../services/UserService";

export class UserController {
    private name: string;
    private email: string;
    private password: string;
    userService: UserService;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.userService = new UserService()
    }
    
    signIn () {
        
    }

    signOut () {

    }

    async signUp (name: string, email: string, password: string ){
        const user = await this.userService.signUp(name, email, password)
        return user
    }
}