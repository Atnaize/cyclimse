# Cyclimse API

This project is a simple Node.js API that provides random quotes and quotes by character. It is built with TypeScript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Project Structure](#project-structure)
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

## Project Structure

The project follows a clean architecture with the following structure:

- **src**: Main source code directory.
  - **controller**: Controller for handling HTTP requests.
  - **quoteInterface**: Quote interface.
  - **routes**: Express route definitions.
  - **service**: Business logic and data handling service.
  - **index.ts**: Entry point to start the server.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
