# GramChecker

An AI-powered grammar and spelling checker application built with React, Node.js, and Express. This application leverages GitHub Models API to provide advanced writing assistance including grammar correction, spell checking, and sentence rephrasing.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Grammar Checking**: Advanced AI algorithms to detect and correct grammatical errors
- **Spell Checking**: Comprehensive spell-checking capability to catch typos and suggest corrections
- **Sentence Rephrasing**: Intelligent rephrasing suggestions to improve clarity and impact
- **User Authentication**: Secure login using Privy.io authentication
- **Responsive UI**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Processing**: Instant feedback on writing improvements

## Tech Stack

### Frontend
- React 18
- React Router v6
- Tailwind CSS
- Axios for API requests
- Privy.io for authentication
- Vite as build tool

### Backend
- Node.js
- Express.js
- GitHub Models API (OpenAI GPT-4o-mini)
- CORS for cross-origin requests

## Project Structure

```
gram-checker/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── images/         # Static images
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── index.html          # HTML template
│   └── vite.config.js      # Vite configuration
└── server/                 # Node.js backend
    ├── routes/             # API route handlers
    ├── app.js              # Express app entry point
    └── package.json        # Server dependencies
```

## Prerequisites

- Node.js >= 16.x
- npm or yarn
- GitHub Personal Access Token (PAT) for GitHub Models API

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gram-checker
```

2. Install client dependencies:
```bash
cd client
npm install
```

3. Install server dependencies:
```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
GITHUB_TOKEN=your_github_personal_access_token
PORT=8000
```

To create a GitHub Personal Access Token:
1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate a new token with appropriate permissions
3. Copy the token and add it to your `.env` file

## Usage

1. Start the server:
```bash
cd server
npm run dev
```

2. Start the client (in a new terminal):
```bash
cd client
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Grammar Check
- **POST** `/api/grammarcheck`
- Request body: `{ "text": "Your text here" }`
- Response: `{ "correctedText": "Corrected text" }`

### Spell Check
- **POST** `/api/spellcheck`
- Request body: `{ "text": "Your text here" }`
- Response: `{ "correctedText": "Corrected text" }`

### Sentence Rephrasing
- **POST** `/api/analyze`
- Request body: `{ "sentence": "Your sentence here" }`
- Response: `{ "rephrasedSentences": ["Rephrased sentence 1", "Rephrased sentence 2", "Rephrased sentence 3"] }`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.