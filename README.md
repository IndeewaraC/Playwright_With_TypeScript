Automation Exercise - Playwright TypeScript Framework
A robust, end-to-end (E2E) testing framework built with Playwright and TypeScript to automate the Automation Exercise practice website. 
This project implements the Page Object Model (POM) to ensure scalability, readability, and maintainability.

├── .github/workflows      # CI/CD configurations (playwright.yml)
├── data_files             # Test data (JSON/TS) for login and signup
├── pageObjects            # Page classes containing selectors and actions
├── tests                  # Test specifications (.spec.ts files)
├── utils                  # Shared helper functions and common logic
├── playwright.config.ts   # Global Playwright configuration
└── package.json           # Project dependencies and scripts

Tech Stack
Language: TypeScript
Test Runner: Playwright
CI/CD: GitHub Actions
Architecture: Page Object Model (POM)
