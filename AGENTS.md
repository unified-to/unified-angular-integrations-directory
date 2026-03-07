# AGENTS.md

## Cursor Cloud specific instructions

This is an **Angular library** project (not an application). The published package is `@unified-api/angular-directory`. There is no `ng serve`-able app — only a library built with `ng-packagr`.

### Key commands

- **Build**: `npm run build` — compiles the library to `dist/unified-angular-directory`
- **Test**: `npx ng test --no-watch --browsers=ChromeHeadless` — runs Karma/Jasmine unit tests in headless Chrome
- **Watch build**: `npm run watch` — rebuilds the library on file changes

### Known issues

- The existing unit test in `unified-angular-directory.component.spec.ts` fails because it uses `declarations: [UnifiedDirectory]` for a standalone component. It should use `imports` instead. This is a pre-existing bug in the repo.

### Gotchas

- The workspace `tsconfig.json` maps path `unified-angular-directory` → `dist/unified-angular-directory`. The npm package name is `@unified-api/angular-directory` (scoped). When creating a consuming test app, import from the source directly or add a path mapping for the scoped name.
- Chrome/Chromium is required for running Karma tests; use `--browsers=ChromeHeadless` for CI/headless environments.
- This is a library-only workspace — `npm start` / `ng serve` will fail without an application project.
