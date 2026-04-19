# 🏗️ Enterprise E2E Framework: Playwright & TypeScript

[![Playwright CI](https://github.com/IndeewaraC/Playwright_With_TypeScript/actions/workflows/playwright.yml/badge.svg)](#) *(Note: Update with your actual repo link)*

## 💡 TL;DR & Business Value
**The Problem:** Unstructured UI automation scripts quickly become unmaintainable technical debt as an application scales, leading to flaky tests, false positives, and slowed release cycles.
**The Solution:** This project demonstrates an enterprise-grade End-to-End (E2E) testing architecture. The implementation of **TypeScript** ensures strict compile-time type safety, drastically reducing runtime errors. Combined with the **Page Object Model (POM)** and **CI/CD integration**, this framework is designed for long-term maintainability and automated continuous testing.

---

## 📖 Project Overview
This is a robust, scalable E2E automation framework built to thoroughly test the "Automation Exercise" e-commerce practice platform. It serves as a blueprint for implementing industry best practices in UI automation, focusing on code readability, reusability, and seamless pipeline execution.

## 🛠️ Tech Stack & Architecture
* **Language:** TypeScript (for static typing and predictable code)
* **Test Runner:** Playwright 
* **Architecture:** Page Object Model (POM)
* **CI/CD:** GitHub Actions (Automated execution on push/pull request)

---

## 🗄️ Project Structure

```text
├── .github/workflows      # CI/CD configurations (Automated test execution via playwright.yml)
├── data_files             # Externalized test data (JSON/TS) for workflows like login and signup
├── pageObjects            # Page classes encapsulating UI selectors and actions (POM)
├── tests                  # Test specifications (.spec.ts files)
├── utils                  # Shared helper functions, custom assertions, and common logic
├── playwright.config.ts   # Global Playwright configuration (browsers, timeouts, reporters)
└── package.json           # Project dependencies and script aliases
