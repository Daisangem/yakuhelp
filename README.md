
# Yakuhelp

A Riichi Mahjong project focused on Japanese Mahjong.

## Requirements

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## Installation

Clone the repository:

```bash
git clone git@github.com:Daisangem/yakuhelp.git
cd yakuhelp
```

Install frontend dependencies:

```bash
cd client
pnpm install
```

Restore backend dependencies:

```bash
cd ../server
dotnet restore
```

## Running

Start the frontend and backend together (the backend uses `dotnet watch` for hot reload):

```bash
cd client
pnpm dev
```

To run only the backend with hot reload:

```bash
cd server
dotnet watch run
```

## Building

Frontend:

```bash
cd client
pnpm build
```

Backend:

```bash
cd server
dotnet build
```

## Third-party assets and software

### Riichi Mahjong Tiles

- Repository: https://github.com/fluffystuff/riichi-mahjong-tiles
- Author: FluffyStuff
- Usage: Mahjong tile graphics
- License: Public Domain

The tile graphics used in Yakuhelp originate from this project.

## Status

Work in progress.
