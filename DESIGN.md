# DESIGN.md

## Overview

This project should feel like a high-energy frontend portfolio with a bold, editorial, action-sports-inspired visual language.

The design should communicate:

- Energy
- Confidence
- Momentum
- Technical polish
- Strong frontend craft

The site should not feel like a generic SaaS landing page or a plain developer resume. It should feel more like a premium campaign-style portfolio that still remains readable, responsive, and maintainable.

## Visual Direction

Use a bold, high-contrast, energetic style inspired by sports branding, editorial landing pages, and modern portfolio websites.

Preferred visual qualities:

- Large typography
- Strong hero sections
- Clear section hierarchy
- Layered or dynamic composition where appropriate
- Confident CTAs
- Project cards that feel curated rather than generic
- Strong contrast between background, text, and accent elements

Avoid:

- Generic dashboard UI styling
- Soft SaaS-style gradients as the primary visual language
- Overly corporate layouts
- Unrelated minimal blog aesthetics
- Random decorative elements that do not support hierarchy

## Colors

The visual system should use a strong, high-contrast palette.

Recommended color roles:

- Background: dark navy, near-black, or deep blue surfaces
- Primary text: white or near-white
- Secondary text: muted cool gray
- Accent: energetic red, yellow, or electric blue
- Borders: subtle translucent lines on dark surfaces
- Cards: dark layered surfaces with clear contrast

Implementation rules:

- Reuse existing Tailwind tokens and project styles when available.
- Do not introduce many new arbitrary colors.
- Use accent colors intentionally for CTAs, highlights, active states, and key visual anchors.
- Ensure text contrast remains readable on all screen sizes.

## Typography

Typography should feel bold, confident, and editorial.

Rules:

- Use large display text for hero and major section titles.
- Use clear size contrast between headings, body text, labels, and metadata.
- Keep body copy readable and not overly stylized.
- Avoid using too many font weights or decorative text treatments.
- Prefer concise headings with strong hierarchy.

Recommended hierarchy:

- Hero title: largest and most expressive text on the page
- Section heading: bold and clear
- Card title: prominent but below section heading level
- Body text: readable and compact
- Metadata / labels: smaller, uppercase or muted when appropriate

## Layout & Spacing

The layout should feel spacious, intentional, and campaign-like.

Rules:

- Use generous vertical spacing between major sections.
- Keep content aligned to a consistent container width.
- Use grid layouts for project cards and grouped content.
- Preserve clear spacing between headings, body copy, CTAs, and cards.
- Avoid cramped sections.
- Avoid changing unrelated layout areas when working on a scoped issue.

Responsive rules:

- Mobile layout should be clean and readable first.
- Do not rely on complex desktop-only composition.
- Preserve CTA visibility on small screens.
- Stack cards cleanly on mobile.

## Components

### Buttons

Buttons should feel confident and action-oriented.

Rules:

- Primary buttons should have strong contrast.
- Secondary buttons may use outline or ghost styles.
- Button text should be concise.
- Hover states should be noticeable but not distracting.

### Cards

Project cards should feel polished and curated.

Rules:

- Use clear title, short description, tech stack, and CTA areas.
- Keep spacing consistent.
- Use subtle borders, shadows, or layered surfaces when appropriate.
- Avoid generic flat cards with no hierarchy.

### Navigation

Navigation should be clear and lightweight.

Rules:

- Keep nav readable on dark backgrounds.
- Avoid adding unnecessary navigation complexity.
- Mobile navigation should remain simple.

### Sections

Each major section should have a clear purpose.

Rules:

- Use strong section headings.
- Avoid decorative sections without content value.
- Keep repeated section patterns consistent.

## Motion & Interaction

Motion may be used to reinforce energy, but it should not reduce usability.

Rules:

- Prefer subtle hover, transition, and reveal effects.
- Avoid excessive animation.
- Do not add heavy animation libraries unless explicitly requested.
- Respect performance and accessibility.

## Accessibility

Design changes must preserve accessibility.

Rules:

- Maintain sufficient color contrast.
- Use semantic HTML where possible.
- Do not remove visible focus states.
- Interactive elements must remain keyboard accessible.
- Avoid using color alone to communicate meaning.

## Do's

- Keep the visual language bold and energetic.
- Preserve strong hierarchy.
- Reuse existing project patterns where possible.
- Keep UI changes scoped to the GitHub Issue.
- Prioritize polished portfolio presentation.
- Check responsive behavior after UI changes.

## Don'ts

- Do not introduce unrelated visual styles.
- Do not redesign unrelated pages or sections.
- Do not add a UI library unless explicitly requested.
- Do not copy reference images pixel-by-pixel.
- Do not create broad refactors inside a UI issue.
- Do not add unnecessary markdown files.

## AI Implementation Rules

When implementing UI-related GitHub Issues:

1. Read this file before modifying UI.
2. Follow `AGENTS.md` for engineering rules.
3. Treat visual references as direction, not pixel-perfect specifications.
4. Keep changes limited to the page, section, or component group described in the issue.
5. Do not introduce unrelated redesigns.
6. Do not modify unrelated files.
7. Explain in the PR summary how the implementation follows this design direction.
