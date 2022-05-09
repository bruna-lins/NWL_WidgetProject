import express from "express";
import { prisma } from "./prisma";
import nodemailer from 'nodemailer';
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "./use-cases/submitFeedbackUseCase";
import { NodemailerMailService } from "./services/nodemailer/nodemailerMailService";

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot} = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailService = new NodemailerMailService();


    const submitFeedbackUseCase = new SubmitFeedbackUseCase( 
        prismaFeedbacksRepository,
        nodemailerMailService
        )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send()
})