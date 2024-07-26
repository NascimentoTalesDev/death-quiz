export class GameController {
    currentQuestion: number;
    totalQuestion: number;
    totalPoints: number = 0;
    
    constructor(totalQuestion: number, currentQuestion: number){
        this.totalQuestion = totalQuestion
        this.currentQuestion = currentQuestion
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
        if(this.currentQuestion < (this.totalQuestion - 1)){
            this.currentQuestion++;
            
            return {
                "next": true,
                "current": this.currentQuestion
            }
        }else{
            return {
                "next": false,
                "current": this.currentQuestion
            }
        }
    }

}