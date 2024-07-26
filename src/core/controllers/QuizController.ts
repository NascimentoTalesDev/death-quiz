import { Quiz } from "@/types/quiz";
import { QuizService } from "../services/QuizService";
import { NextRequest, NextResponse } from "next/server";

export class QuizController {
  private quizService: QuizService;

  constructor() {
    this.quizService = new QuizService();
  }

  getAll() {    
    return this.quizService.getAll();
  }

  async findOne(id: number) {
    return await this.quizService.findOne(id);
  }
}
