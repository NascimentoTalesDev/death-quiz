export class UserController {
    private name: string = ''
    private email: string = ''
    private password: string = ''

    constructor(){}

    signIn () {
        return  "OK"
    }
    signOut () {

    }
    signUp (name: string, email: string, password: string ) {
        this.name = name
        this.email = email
        this.password = password
    }


}