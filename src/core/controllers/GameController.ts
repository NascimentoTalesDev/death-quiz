export class GameController {
    currentQuestion: number = 0;
    totalQuestion: number;
    totalPoints: number = 0;
    
    constructor(totalQuestion: number ){
        this.totalQuestion = totalQuestion
    }

    start(){
        if (this.totalQuestion > 0) {
            return true
        }
        return false
    }
    
    checkAnswer(answer: string, correctAnswer: string){
        if (answer == correctAnswer) {
            this.totalPoints++;
            return true;
        }
        return false
    }
    nextQuestion(){
        if(this.currentQuestion < this.totalQuestion){
            this.currentQuestion++;
            return true
        }else{
            return false
        }
    }
    
}