
# Yakuhelp

A Riichi Mahjong project focused on making it easier to understand and work with Japanese Mahjong.

## Prerequisites

Make sure you have the following installed:

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js (LTS)](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/)

You can verify your installations:

```bash
dotnet --version
node --version
npm --version
pnpm --version
```

## Installation

Clone the repository:

```bash
git clone git@github.com:Daisangem/yakuhelp.git
cd yakuhelp
```

### Frontend

Navigate to the client directory and install dependencies:

```bash
cd client
pnpm install
```

### Backend

Navigate to the server directory and restore .NET dependencies:

```bash
cd server
dotnet restore
```

## Running locally

Start the backend:

```bash
cd server
dotnet run
```

Start the frontend in a separate terminal:

```bash
cd client
pnpm dev
```

Vite will display the local development URL in your terminal.

## Building

Build the frontend:

```bash
cd client
pnpm build
```

Build the backend:

```bash
cd server
dotnet build
```

## Project Structure

```text
yakuhelp/
├── client/    # Frontend application built with Vite
├── server/    # .NET backend
└── README.md
```

## Status

Work in progress.
