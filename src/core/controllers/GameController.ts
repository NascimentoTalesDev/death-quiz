export class GameController {
  musics: string[] = [
    "pink-soldiers.mp3",
    "way-back-then.mp3",
    "wife-husband-billion.mp3",
    "round.mp3",
  ];
  currentQuestion: number;
  totalQuestions: number;
  totalPoints: number = 0;
  music: HTMLAudioElement;
  avanca: HTMLAudioElement;
  timer: number = 0;
  MINUTES_PER_QUESTION: number = 180; // 3 minutes per question

  getRandomMusic(): string {
    const randomIndex = Math.floor(Math.random() * this.musics.length);
    return this.musics[randomIndex];
  }

  constructor(totalQuestions: number, currentQuestion: number) {
    this.totalQuestions = totalQuestions;
    this.currentQuestion = currentQuestion;
    this.music = new Audio(`/audios/${this.getRandomMusic()}`);
    this.avanca = new Audio("");
  }

  start() {
    if (this.totalQuestions > 0) {
      this.timer = this.totalQuestions * 180;
      this.calculateTimePerQuestion(this.totalQuestions);
      this.playMusic();
      return true;
    }
    return false;
  }

  calculateTimePerQuestion(totalQuestions: number) {
    this.timer = totalQuestions * this.MINUTES_PER_QUESTION;
  }

  playMusic() {
    this.music.volume = 0.4;
    this.music.loop = true;
    this.music.play();
  }

  stopMusic() {
    this.music.pause();
  }

  playAvanca() {
    this.avanca.volume = 0.4;
    this.avanca.play();
  }

  checkAnswer(answer: string, correctAnswer: string) {
    if (answer == correctAnswer) {
      this.totalPoints++;
      this.playAvanca();
      return true;
    } else {
      this.stopMusic();
      return false;
    }
  }

  nextQuestion() {
    if (this.currentQuestion < this.totalQuestions - 1) {
      this.currentQuestion++;
      return {
        next: true,
        current: this.currentQuestion,
      };
    } else {
      return {
        next: false,
        current: this.currentQuestion,
      };
    }
  }
}
