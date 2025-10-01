# Calculadora API

Backend API for the Calculadora application, providing endpoints for mathematical operations.

## Features

- Addition and subtraction operations
- User authentication and authorization
- Calculation history tracking
- Input validation
- Error handling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Copy the environment file and configure it
   ```
   cp .env.example .env
   ```
4. Start the development server
   ```
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/external/auth/login` - User login
- `POST /api/external/auth/register` - User registration
- `POST /api/external/auth/forgot-password` - Request password reset
- `POST /api/external/auth/reset-password` - Reset password with token

### Calculator Operations

- `POST /api/internal/calculator/add` - Addition operation
- `POST /api/internal/calculator/subtract` - Subtraction operation
- `POST /api/internal/calculator/clear` - Clear calculator state
- `GET /api/internal/calculator/history` - Get calculation history

## Project Structure

```
src/
├── api/                  # API controllers
│   ├── external/         # Public endpoints
│   └── internal/         # Protected endpoints
├── config/               # Application configuration
├── instances/            # Service instances
├── middleware/           # Express middleware
├── routes/               # Route definitions
├── services/             # Business logic
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── server.ts            # Application entry point
```

## Development

### Build

```
npm run build
```

### Test

```
npm test
```

### Lint

```
npm run lint
```

## License

This project is licensed under the MIT License.
