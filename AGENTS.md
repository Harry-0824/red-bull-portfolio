# AGENTS.md

AI coding agents must follow these rules when working in this repository.

## Project Profile

- This is a Next.js portfolio project for `red-bull-portfolio`.
- The app uses React, TypeScript, Tailwind CSS, and npm.
- The portfolio is intended to be deployed on Netlify.
- Keep changes focused, reviewable, and tied to a specific GitHub issue or user request.

## Workflow Rules

- Work in small, issue-driven tasks.
- Read the issue or request before changing files.
- Keep the implementation scope narrow and avoid unrelated cleanup.
- Do not modify application code for documentation-only tasks.
- Do not modify `package.json` or `package-lock.json` unless the issue explicitly requires dependency or script changes.
- Do not create extra markdown files unless explicitly requested.
- Do not add `WORKFLOW.md`, `TODO.md`, `PROJECT_BRIEF.md`, `ARCHITECTURE.md`, `NOTES.md`, or similar side documents unless the issue specifically asks for them.
- Prefer existing project structure, naming, and styling conventions.
- Use concise commits and clear pull request descriptions.

## Package Manager

Use npm for all package and script commands.

Common commands:

```bash
npm run dev
npm run build
npm run lint
npm run start
```

Do not use `yarn`, `pnpm`, or `bun` for this project unless the project maintainers explicitly change the package manager.

## Branch Strategy

- `main`: stable default branch.
- `feature/*`: new user-facing features or enhancements.
- `fix/*`: bug fixes and regressions.
- `docs/*`: documentation-only changes.

Create branches from `main` unless the issue says otherwise.

## Validation

Before opening a pull request:

- Confirm the diff only includes files in scope.
- For documentation-only changes, confirm no application code changed.
- Run the most relevant npm check when the change could affect build or lint behavior.
- For docs-only changes, a manual file review is acceptable when no code paths changed.

## Pull Requests

Every PR should explain:

- What changed.
- Why it changed.
- How to check or validate the change.
- Any known limitations or follow-up work.
