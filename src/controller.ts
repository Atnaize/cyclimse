import { Request, Response } from 'express';
import { Service } from './service';

export class Controller {
    private service: Service;

    constructor(service: Service) {
        this.service = service;
        this.bindMethods();
    }

    private bindMethods(): void {
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this)) as (keyof Controller)[];

        methods.forEach((method) => {
            const property = this[method];

            if (typeof property === 'function') {
                this[method] = property.bind(this);
            }
        });
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