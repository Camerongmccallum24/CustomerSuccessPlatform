# Customer Success Platform

This repository contains the code for a Customer Success Platform, a full-stack application designed to help businesses manage and analyze customer data.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Backend Development](#backend-development)
4. [Frontend Development](#frontend-development)
5. [AI Model Integration](#ai-model-integration)
6. [Testing](#testing)
7. [Deployment](#deployment)

## Project Overview

The Customer Success Platform is built using Node.js with Express for the backend, React for the frontend, and integrates a simple AI model for churn prediction. It uses TypeScript for type-safe code and Docker for containerization.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm
- Docker (for deployment)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/customer-success-platform.git
   cd customer-success-platform
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up TypeScript:
   ```
   npx tsc --init
   ```

## Backend Development

The backend is built with Express and TypeScript.

### Key Files

- `src/server.ts`: Main server file
- `src/models/Customer.ts`: Customer data model
- `src/routes/customerRoutes.ts`: API routes for customer operations

### Running the Server

```
npm run start
```

## Frontend Development

The frontend is built with React and uses Tailwind CSS for styling.

### Key Components

- `src/components/Dashboard.tsx`: Main dashboard layout
- `src/components/CustomerList.tsx`: Customer list view
- `src/App.tsx`: Main React component

### Running the Frontend

```
npm run start:frontend
```

## AI Model Integration

We use TensorFlow.js for a simple churn prediction model.

### Key File

- `src/models/churnModel.ts`: Contains functions for creating, training, and using the churn prediction model

## Testing

We use Jest for testing our application.

### Running Tests

```
npm test
```

## Deployment

We use Docker for deployment.

### Building the Docker Image

```
docker build -t customer-success-platform .
```

### Running the Docker Container

```
docker run -p 3000:3000 customer-success-platform
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
