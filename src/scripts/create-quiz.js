const { PrismaClient } = require("@prisma/client");
const db = global.prismadb || new PrismaClient();

const dataQuestions = [
    { question: "Como se chama o irmão de Wandinha?", correctAnswer: "Feioso" },
    { question: "Qual é o nome da colega de quarto de Wandinha?", correctAnswer: "Enid" },
    { question: "perguntaComo se chama a ancestral de Wandinha?", correctAnswer: "Goody" },
    { question: "Em qual cidade mora o Tyler?", correctAnswer: "Jerico" },
    { question: "Em qual lugar Wandinha encontrou seu irmão preso com uma maçã na boca?", correctAnswer: "Armário" },
    { question: "Quantos episódios tem a primeira temporada?", correctAnswer: "8 epsódios" },
    { question: "Como se chamam os pais de Wandinha?", correctAnswer: "Mortícia e Gomez" },
    { question: "Qual esporte Wandinha e Bianca duelaram no primeiro episódio?", correctAnswer: "Esgrima" },
    { question: "Que aluno pode dar vidas ao seus desenhos?", correctAnswer: "Xavier" },
    { question: "Em que dia Wandinha nasceu?", correctAnswer: "Sexta-feira 13" },
]
const dataAnswers = [
    [{ asnswer: "Feioso" }, { asnswer: "Lucas" }, { asnswer: "Eugene" }, { asnswer: "Xavier" }],
    [{ asnswer: "Marie" }, { asnswer: "Enid" }, { asnswer: "Bianca" }, { asnswer: "Yoko" }],
    [{ asnswer: "Enid" }, { asnswer: "Marie" }, { asnswer: "Valerie" }, { asnswer: "Goody" }],
    [{ asnswer: "Bucareste" }, { asnswer: "Jerico" }, { asnswer: "Sidney" }, { asnswer: "Cairo" }],
    [{ asnswer: "Banheiro" }, { asnswer: "Cozinha" }, { asnswer: "Armário" }, { asnswer: "Vestiário" }],
    [{ asnswer: "9 epsódios" }, { asnswer: "5 epsódios" }, { asnswer: "10 epsódios" }, { asnswer: "8 epsódios" }],
    [{ asnswer: "Mortícia e Carlos" }, { asnswer: "Mortícia e Gomez" }, { asnswer: "Mortícia e Chico" }, { asnswer: "Valéria e Gomez" }],
    [{ asnswer: "Karatê" }, { asnswer: "Judô" }, { asnswer: "Esgrima" }, { asnswer: "Vôlei" }],
    [{ asnswer: "Joy" }, { asnswer: "Xavier" }, { asnswer: "Ajax" }, { asnswer: "Jamie" }],
    [{ asnswer: "Segunda-feira 13" }, { asnswer: "Sexta-feira 13" }, { asnswer: "Sexta-feira 15" }, { asnswer: "Terça-feira 16" }],
]

const quiz = async () => {
    await db.$connect()
    try {
        await db.$transaction( async (prisma) => {

            const quiz =  await prisma.quiz.create({
                data: {
                    image: "wandinha.jpg", 
                    title: "Wandinha",
                },
            })
            
            for (let index = 0; index < dataQuestions.length; index++) {
                   
                const question = await prisma.question.create({
                    data: {
                        quizId: quiz.id,
                        question: dataQuestions[index].question,
                        correctAnswer: dataQuestions[index].correctAnswer
                    }
                })
                
                for (let idx = 0; idx < dataAnswers[index].length; idx++) {
                    
                    await prisma.answer.create({
                        data: { answer: dataAnswers[index][idx].asnswer, questionId: question.id}
                    }) 
                }
                
            }
            
        })
        
        console.log("Successfully") ;
    } catch (error) {
        console.log(error);
    } finally {
        db.$disconnect();
    }
}

quiz()