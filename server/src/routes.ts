import express from "express";
import { prisma } from "./prisma";
import nodemailer from 'nodemailer';

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b4899afc7643df",
        pass: "dd0fded89dd9a2"
    }
});

routes.post('/feedbacks', async (req, res) => {

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

    return res.status(201).json({ data: feedback })
})