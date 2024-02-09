# Cyclimse API

This project is a simple Node.js API that provides random quotes and quotes by character. It is built with TypeScript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Data](#data)
- [Contributing](#contributing)
- [License](#license)

## Installation

Make sure you have Node.js and npm installed on your machine.

1. Clone the repository:

```bash
git clone https://github.com/Atnaize/cyclimse.git
cd cyclimse
```

2. Install dependencies:

```bash
npm install
```

3. Build the TypeScript code:

```bash
npm run build
```

4. Start the server:

```bash
npm start
```

The server will be running at http://localhost:3000.

## Usage

You can now make requests to the API using tools like curl, Postman, or any HTTP client.

## Endpoints

- `GET /v1/random`: Get a random quote.
- `GET /v1/random/{number}`: Get a specific number of random quotes.
- `GET /v1/character/{character}/{number?}`: Get a specific number of quotes by a particular character.  If the `number` parameter is not provided, it defaults to 1.

## Data

### Quotes

The project includes a [quotes.json](data/quotes.json) file that stores information about quotes from different characters. The structure of each entry in the JSON array is as follows:

```json
[
    {
        "timestamp": "0:00:03",
        "character": "Première voix off",
        "quote": "Attention, ce flim n'est pas un flim sur le cyclimse. Merci de votre compréhension."
    },
    {
        "timestamp": "0:00:13",
        "character": "Deuxième voix off",
        "quote": "Entre l'Australia et la South América, dans l'océan South Pacific : l'atoll de Pom Pom Galli."
    },
    // ...
]
```

### Available Characters

The [characters.json](data/characters.json) file follows a simple JSON array format with character names:

```json
[
    "Bob",
    "Callaghan",
    // ...
]
```

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
