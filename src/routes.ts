import express from 'express';
import { Controller } from './controller';

const router = express.Router();

export const routes = (controller: Controller) => {
    router.get('/', (req, res) => {
        const quote = controller.getService().getRandomQuote();
        const timestamp = controller.getService().getYoutubeTimestamp(quote.timestamp);
        res.render('index', {quote, timestamp });
    });

    router.get('/v1/random', controller.getRandomQuote);
    router.get('/v1/random/:number', controller.getRandomQuotes);
    router.get('/v1/character/:character/:number?', controller.getQuotesByCharacter);

    return router;
};
