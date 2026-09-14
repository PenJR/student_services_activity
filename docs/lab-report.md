# Laboratory Report

## Part 1 - Development Environment Verification

- Git version: Record your actual output here.
- Node.js version: Record your actual output here.
- npm version: Record your actual output here.
- pnpm version: Record your actual output here if used.

## Part 3 - Project Initialization

### package.json identification

- Project name: student-services-portal
- Version: 1.0.0
- Scripts: build, test, lint, format, check-format
- Dependencies: Node.js and TypeScript project dependencies
- Development dependencies: TypeScript, ESLint, Prettier, Node types, and TypeScript ESLint packages

## Part 4 - TypeScript Setup

The project includes a valid TypeScript configuration in [tsconfig.json](../tsconfig.json).

## Part 5 - Initial TypeScript Program

The original implementation includes:

- a typed `Student` interface
- a `formatStudent()` helper
- sample student data and output

## Part 6 - Generic API Response Type

`ApiResponse<T>` is better than `ApiResponse { success: boolean; data: any; }` because it preserves type safety.

Using `any` removes type information, which means the compiler cannot warn us when the wrong data shape is used. With a generic, code such as `ApiResponse<Student>` or `ApiResponse<Student[]>` keeps the expected type clear and makes misuse much easier to catch during development.

## Part 7 - Runtime Validation

The function `isStudent(value: unknown): value is Student` checks whether a value is actually a valid student object before accepting it.

Example valid object:

```ts
const validStudent: unknown = {
  id: 2,
  name: "Maria Santos",
  email: "maria@example.com",
  status: "active",
};
```

Example invalid object with incorrect id:

```ts
const invalidIdStudent: unknown = {
  id: "2",
  name: "Maria Santos",
  email: "maria@example.com",
  status: "active",
};
```

Example invalid object missing the name:

```ts
const missingNameStudent: unknown = {
  id: 3,
  email: "student@example.com",
  status: "inactive",
};
```

TypeScript interfaces help during compile time, but they cannot guarantee that external API data is valid at runtime. A server response or user input may not match the expected structure even if the TypeScript code compiles correctly.

## Part 8 - ESLint and Prettier

The project includes linting and formatting commands:

```bash
npm run lint
npm run format
```

These commands were verified successfully during project validation.

## Part 9 - .gitignore

The following patterns are ignored:

- `node_modules/` — avoids committing installed dependencies
- `dist/` — avoids generated build output
- `.env` — avoids committing secrets and environment values
- `*.log` — avoids temporary logs from runtime or tooling
- `.DS_Store` — avoids macOS metadata files
- `coverage/` — avoids test coverage output
- `*.tsbuildinfo` — avoids TypeScript incremental build metadata

## Part 10 - Git Setup

The repository was initialized with Git and checked using `git status` before staging.

## Part 11 - Initial Commit

The project was committed with a meaningful initial message:

```bash
git commit -m "chore: initialize TypeScript workflow project"
```

## Part 12 - GitHub Repository

To complete this part, create the GitHub repository, connect the remote, and verify the repository contents and history.

## Part 13 - README

The project README includes:

- project title
- description
- requirements
- installation instructions
- how to run the project
- linting instructions
- formatting instructions
- workflow
- AI usage policy

## Part 14 - GitHub Issue

Issue title: Add student-status formatter

Description:
The application should return a user-friendly label for the student's status.

Acceptance criteria:

- "active" -> "Active Student"
- "inactive" -> "Inactive Student"
- Invalid or unexpected values should be handled safely.

## Part 15 - Feature Branch

The project uses the branch:

```bash
feature/student-status
```

## Part 16 - AI-Assisted Development

AI prompt used:

> Suggest a TypeScript implementation for converting a student's active/inactive status into a readable label. Explain the implementation and include possible edge cases. Do not use the any type.

AI response summary:
The AI suggested a typed union and a clear mapping function to return human-readable labels.

## Part 17 - AI Review Form

The completed AI review form is in [ai-review.md](ai-review.md).

## Part 18 - Final Implementation

The final implementation uses the `StudentStatus` union and `getStudentStatusLabel()` function to return user-friendly labels.

## Part 19 - Testing

The feature was validated using:

```bash
npx tsc --noEmit
npx eslint .
npx prettier --check .
```

## Part 20 - AI Verification

Claim or code verified: TypeScript string literal unions are valid and safe for status mapping.
Source: TypeScript official documentation.
Result: Verified and accepted.

## Part 21 - Commit the Feature

The final feature should be committed once the GitHub workflow is completed and verified.

## Part 22 - Push the Feature Branch

Push the branch after creating the remote repository:

```bash
git push -u origin feature/student-status
```

## Part 23 - Pull Request

The PR template is in [pull-request.md](pull-request.md).

## Part 24 - Code Review

The review evidence is in [code-review.md](code-review.md).

## Part 25 - Revise If Necessary

If reviewer feedback identifies a problem, fix it, test again, commit, and push.

## Part 26 - Merge the Pull Request

After approval, merge into `main` and verify the issue is closed and the main branch contains the final feature.

## Short Reflection

This workflow improved software quality by enforcing type safety, structured Git collaboration, clear branching, and responsible AI usage. The feature branch reduced risk by isolating work before merging. TypeScript helped catch structural errors early, while runtime validation remained necessary for external data. The professional workflow also makes team development more organized and easier to review.
