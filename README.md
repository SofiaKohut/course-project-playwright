# course-project-playwright

Tests for Automation Typescriptcourse 

## Setup

# Clone the repository
git clone https://github.com/SofiaKohut/course-project-playwright.git
cd course-project-playwright

# Install dependencies
npm install

# Install browsers
npx playwright install

## Testing Stack
- [Playwright](https://playwright.dev/) — testing framework
- TypeScript — test language
- Node.js v18+

## Running Tests

# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# Run a specific file
npx playwright test tests/example.spec.ts

# Show report
npx playwright show-report

### Full Test Script Reference

| Command | Description |
|---|---|
| `npx playwright test` | Run all tests |
| `npx playwright test --ui` | Run with UI mode |
| `npx playwright test --headed` | Run with browser visible |
| `npx playwright test --debug` | Run in debug mode |
| `npx playwright test --grep @smoke` | Run tests by tag |
| `npx playwright show-report` | Open HTML report |

## Code Style
- Language: TypeScript
- Tests are located in the `tests/` folder
- File naming: `*.spec.ts`
- Page Object Model (POM) pattern