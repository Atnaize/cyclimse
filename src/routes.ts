import express from 'express';
import { Controller } from './controller';

const router = express.Router();

export const routes = (controller: Controller) => {
    router.get('/random', controller.getRandomQuote);
    router.get('/random/:number', controller.getRandomQuotes);
    router.get('/character/:character/:number?', controller.getQuotesByCharacter);

    return router;
};
