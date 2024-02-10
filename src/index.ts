import express from 'express';
import quotes from '../data/quotes.json';
import { Controller } from './controller';
import { Service } from './service';
import { routes } from './routes';

const app = express();
const PORT = 3000;

const service = new Service(quotes);
const controller = new Controller(service);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(routes(controller));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
