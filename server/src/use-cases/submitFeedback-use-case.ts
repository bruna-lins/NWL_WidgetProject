import { FeedbacksRepository } from "../repositories/feedbacksRepository";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prismaFeedbacksRepository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    private feedbacksRepository: PrismaFeedbacksRepository

    constructor(
        feedbacksRepository: FeedbacksRepository,
    ) {
        this.feedbacksRepository = feedbacksRepository
    }
    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;
    }
}