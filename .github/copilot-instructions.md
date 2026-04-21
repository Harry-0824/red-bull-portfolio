# Copilot Instructions

## Project Context

This repository is a personal portfolio website.
Use the existing project structure and technologies already present in the repo.
Assume this project uses Next.js, TypeScript, and the current styling approach already configured in the repository.

## Working Rules

- Follow the task spec in `/docs/specs/` before making code changes.
- Do not make broad unrelated refactors.
- Keep changes scoped to the current task.
- Prefer small, explainable edits.
- Do not introduce new dependencies unless explicitly requested.
- Preserve readability and component reusability.
- Avoid editing unrelated files.

## Coding Expectations

- Keep TypeScript types valid.
- Keep components focused and understandable.
- Prefer predictable structure over clever abstractions.
- If a change may affect other sections, explain the risk first.

## Output Expectations

When asked to implement a task:

1. First summarize the task.
2. Then list which files should change.
3. Then implement.
4. Finally explain how the changes map to the spec acceptance criteria.

## Workflow Constraints

- Use Git branch or Git worktree isolation for task execution.
- Treat `/docs/rules/` as project rules.
- Treat `/docs/specs/` as the source of truth for current task scope.
