import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
       await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example',
            screenshot: 'data:image/png;base64, ewgetgwewer5611',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedback.execute({
             type: '',
             comment: 'example',
             screenshot: 'data:image/png;base64, ewgetgwewer5611',
         })).rejects.toThrow();
     });

     it('should not be able to submit a feedback without a comment', async () => {
        await expect(submitFeedback.execute({
             type: 'BUG',
             comment: '',
             screenshot: 'data:image/png;base64, ewgetgwewer5611',
         })).rejects.toThrow();
     });

     it('should not be able to submit a feedback with a invalid screenshot', async () => {
        await expect(submitFeedback.execute({
             type: 'BUG',
             comment: 'exemple',
             screenshot: 'invalid.png',
         })).rejects.toThrow();
     });


});