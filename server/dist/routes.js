"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.routes = express_1.default.Router();
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b4899afc7643df",
        pass: "dd0fded89dd9a2"
    }
});
exports.routes.post('/feedbacks', async (req, res) => {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Bruna Lins <brunacalipin@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px, color: #111;">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('')
    });
    return res.status(201).json({ data: feedback });
});
