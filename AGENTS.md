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
- Follow the currently assigned GitHub Issue only; do not infer or switch scope.
- Start implementation from the Issue `Suggested Files` before exploring elsewhere.
- Keep the implementation scope narrow and avoid unrelated cleanup.
- Keep diffs minimal and portfolio-focused for the current issue scope.
- Preserve the existing Next.js + React + TypeScript + Tailwind CSS structure unless the issue explicitly asks to change it.
- Do not modify application code for documentation-only tasks.
- Do not modify `package.json` or `package-lock.json` unless the issue explicitly requires dependency or script changes.
- Do not add dependencies unless explicitly required by the issue.
- Do not change Netlify or deployment configuration unless explicitly requested by the issue.
- Do not create extra markdown files unless explicitly requested.
- Do not add `WORKFLOW.md`, `TODO.md`, `PROJECT_BRIEF.md`, `ARCHITECTURE.md`, `NOTES.md`, or similar side documents unless the issue specifically asks for them.
- Never commit secrets or local environment files (for example `.env*`, tokens, API keys, credentials, or machine-local config).
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

## Post-Merge Cleanup Rules

After a PR is successfully merged, clean up the PR head branch when it is safe to do so.

Delete both:

- the remote PR branch
- the local PR branch

Only clean up branches that clearly belong to the merged PR and match these work branch patterns:

- `feature/*`
- `fix/*`
- `docs/*`

Do not delete:

- `main`
- `master`
- `develop`
- `release/*`
- `production/*`
- protected branches
- branches that are not clearly the merged PR head branch
- branches with unmerged or uncertain work

Recommended cleanup commands when safe:

```bash
git checkout main
git pull origin main
git branch -d <branch-name>
git push origin --delete <branch-name>
```

Do not use `git branch -D` unless the user explicitly approves a force delete.

If the environment or tool cannot delete the branch, report the exact branch name and the manual cleanup commands needed.

## UI and Design Rules

For UI-related changes, always read and follow `DESIGN.md`.

Do not introduce unrelated visual styles, new UI libraries, or broad redesigns unless explicitly requested by the GitHub Issue.

Each UI task should stay limited to the page, section, or component group described in the Issue.

Do not copy visual references pixel-by-pixel. Use them only as design direction and convert them into maintainable implementation.

## Validation

Before opening a pull request:

- Confirm the diff only includes files in scope.
- For documentation-only changes, confirm no application code changed.
- Run the most relevant npm check when the change could affect build or lint behavior.
- For docs-only changes, a manual file review/diff check is acceptable when no code paths changed.
- When the issue marks the task as docs-only, no build/test command is required unless the issue explicitly asks for one.

## Pull Requests

Every PR should explain:

- What changed.
- Why it changed.
- How to check or validate the change.
- Any known limitations or follow-up work.
