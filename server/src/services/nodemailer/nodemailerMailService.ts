import nodemailer from 'nodemailer';
import { MailService, SendMailData } from "../mailService";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b4899afc7643df",
        pass: "dd0fded89dd9a2"
    }
});

export class NodemailerMailService implements MailService {
    async sendMail({ subject, body }: SendMailData) {
           await transport.sendMail({
                from: 'Equipe Feedget <oi@feedget.com>',
                to: 'Bruna Lins <brunacalipin@gmail.com>',
                subject,
                html: body,
            });
    };
}
