-- DropForeignKey
ALTER TABLE `unlikedquizzes` DROP FOREIGN KEY `unlikedQuizzes_quizId_fkey`;

-- DropForeignKey
ALTER TABLE `unlikedquizzes` DROP FOREIGN KEY `unlikedQuizzes_userId_fkey`;

-- AddForeignKey
ALTER TABLE `unLikedQuizzes` ADD CONSTRAINT `unLikedQuizzes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `unLikedQuizzes` ADD CONSTRAINT `unLikedQuizzes_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `quizzes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
