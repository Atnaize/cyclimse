import { IQuote } from './quoteInterface';

export class Service {
    private quotes: IQuote[];

    constructor(quotes: IQuote[]) {
        this.quotes = quotes;
    }

    getRandomQuote(): IQuote {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }

    getYoutubeTimestamp(timestamp: string): number {
        const [hours, minutes, seconds] = timestamp.split(':').map(Number);
        return hours * 3600 + minutes * 60 + seconds + 8;
    }

    getRandomQuotes(number: number): IQuote[] {
        const numberOfQuotes = Math.min(number, this.quotes.length);
        const shuffledQuotes = this.shuffleArray([...this.quotes]);

        return shuffledQuotes.slice(0, numberOfQuotes);
    }

    getQuotesByCharacter(character: string, number: number): IQuote[] {
        const characterQuotes = this.quotes.filter(quote => quote.character === character);

        if (characterQuotes.length === 0) {
            throw new Error(`No quotes found for character: ${character}`);
        }

        const numberOfQuotes = Math.min(number, characterQuotes.length);
        const shuffledQuotes = this.shuffleArray(characterQuotes);

        return shuffledQuotes.slice(0, numberOfQuotes);
    }

    private shuffleArray(array: IQuote[]): IQuote[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}