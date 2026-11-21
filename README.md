Yakuhelp

A Riichi Mahjong project focused on making it easier to understand and work with Japanese Mahjong.

Project Structure
client/ – Frontend application.
server/ – Backend application.
Development

Clone the repository:

bash
git clone git@github.com:Daisangem/yakuhelp.git
cd yakuhelp


Install dependencies and follow the setup instructions in the respective client/ and server/ directories.

Status

Work in progress.

Prerequisites

Make sure you have the following installed:

.NET SDK
Node.js (LTS)
pnpm
Git

You can verify your installations:

bash
dotnet --version
node --version
npm --version
pnpm --version

Installation

Clone the repository:

bash
git clone git@github.com:Daisangem/yakuhelp.git
cd yakuhelp

Frontend

Navigate to the client directory and install dependencies:

bash
cd client
pnpm install

Backend

Navigate to the server directory and restore .NET dependencies:

bash
cd ../server
dotnet restore

Running locally

Start the backend:

bash
cd server
dotnet run


Start the frontend in a separate terminal:

bash
cd client
pnpm dev


Vite will display the local development URL in your terminal.

Building

Build the frontend:

bash
cd client
pnpm build


Build the backend:

bash
cd server
dotnet build

Project Structure
client/ – Frontend application built with Vite.
server/ – .NET backend.
Status

