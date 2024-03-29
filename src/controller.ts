import { Request, Response } from 'express';
import { Service } from './service';
import { IQuote } from 'quoteInterface';

export class Controller {
    private service: Service;

    constructor(service: Service) {
        this.service = service;

        this.getRandomQuote = this.getRandomQuote.bind(this);
        this.getRandomQuotes = this.getRandomQuotes.bind(this);
        this.getQuotesByCharacter = this.getQuotesByCharacter.bind(this);
    }

    getService(): Service {
        return this.service
    }

    getRandomQuote(req: Request, res: Response): void {
        res.status(200).json(this.service.getRandomQuote());
    }

    getRandomQuotes(req: Request, res: Response): void {
        const number = parseInt(req.params.number) || 1;
        res.status(200).json(this.service.getRandomQuotes(number));
    }

    getQuotesByCharacter(req: Request, res: Response): void {
        const character = req.params.character;
        const number = parseInt(req.params.number) || 1;
        res.status(200).json(this.service.getQuotesByCharacter(character, number));
    }
}