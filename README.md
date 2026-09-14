# Student Services Portal

## Project Title

Student Services Portal

## Project Description

This project establishes the foundation for a University Student Services Portal using a professional TypeScript workflow. The initial setup focuses on a reliable development environment, type-safe code, linting, formatting, and responsible AI-assisted development practices.

## Requirements

- Git
- Node.js
- npm
- TypeScript
- ESLint
- Prettier
- Visual Studio Code or another approved editor
- GitHub account

## Installation Instructions

1. Clone the repository.
2. Open the project folder in your editor.
3. Install dependencies:

```bash
npm install
```

## How to Run the Project

Compile the TypeScript source:

```bash
npm run build
```

Run the project with Node after building:

```bash
node dist/index.js
```

## How to Run Linting

```bash
npm run lint
```

## How to Format Code

```bash
npm run format
```

## Development Workflow

1. Create a feature branch for each task.
2. Write or update TypeScript code with clear, typed interfaces.
3. Run linting and formatting before committing.
4. Review the diff and verify changes.
5. Commit with a concise, descriptive message.
6. Open a Pull Request when the feature is ready.

## AI Usage Policy

AI tools may be used to support development. However, all AI-generated code must be reviewed, modified when needed, tested, and verified before it is committed. The developer remains responsible for correctness, safety, and final project quality.

## Student Status Feature

The project includes a typed student status label helper that converts:

- `active` to `Active Student`
- `inactive` to `Inactive Student`

The implementation is runtime-safe and validated using TypeScript types.
