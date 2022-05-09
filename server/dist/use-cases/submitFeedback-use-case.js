"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackUseCase = void 0;
class SubmitFeedbackUseCase {
    constructor(feedbacksRepository) {
        this.feedbacksRepository = feedbacksRepository;
    }
    async execute(request) {
        const { type, comment, screenshot } = request;
    }
}
exports.SubmitFeedbackUseCase = SubmitFeedbackUseCase;
