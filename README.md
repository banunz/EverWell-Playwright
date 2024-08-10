# Dillinger
## _The Last Markdown Editor, Ever_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.
# EverWell-Playwright
# Introduction
In this scenario, my goal is to develop a test automation framework for the MyBookings web application that will enable the engineering team to deliver high-quality software quickly and confidently. This involves making informed technology choices, designing a scalable architecture, implementing the framework, and educating the team on its use.

# Assumptions
## 1. Test Automation Framework: 
I assume the application has a well-defined frontend (React) and backend (.NET 6+), making it suitable for modern test automation tools like Cypress or Playwright.
## 2. Test Environment: 
I assume that the environment is stable and that the team can integrate automated tests into a CI/CD pipeline.
## 3. User Expertise:
The users of the test automation framework (engineers) have varying levels of experience with test automation, so the framework should be easy to use and well-documented.

# Technology Choices
## Test Automation Tool:

- ### Primary Choice: Playwright.
Reason:The choice of technology for this application would be Playwright due to its ability to directly communicate with browsers, eliminating the need for an intermediary WebDriver, as required by Selenium. This direct interaction allows Playwright to automatically wait for elements to be available, reducing the risk of flaky tests and eliminating the need for manual synchronization. Additionally, Playwright offers robust cross-browser support, including Chromium, Firefox, and WebKit, enabling comprehensive testing across multiple environments. It also handles complex scenarios, such as multi-tab browsing and advanced interactions, more effectively than both Selenium and Cypress, making it the optimal choice for this application.

- ### Secondary Choice: Cypress.
Reason: Cypress Limitations The architecture of both Cypress and Playwright differs from Selenium in that they allow direct communication with the browser, enabling automatic waiting for elements until they become available. This advanced approach significantly reduces flakiness compared to Selenium. However, Cypress has its own limitations. It does not support multiple browsers or tabs, although there are workarounds available. Additionally, Cypress does not support mobile app testing and has difficulty running tests in parallel across multiple machines. While Cypress is easy to get started with, implementing complex scenarios, such as those requiring advanced interfaces, requires a deeper understanding of the framework.

- ### Third Choice : selenium
Cypress or Playwright vs. Selenium When compared to Selenium, I have chosen Cypress or Playwright due to significant architectural differences. Selenium’s architecture does not allow it to directly communicate with web browsers. Instead, it requires a built-in WebDriver, which acts as an intermediary between the test code and the browser. This design introduces several limitations, such as the need to define explicit or implicit waits, making the UI more flaky and unstable. Additionally, Selenium lacks built-in reporting and may struggle to handle complex scenarios like CAPTCHA, multi-tab browsing, and advanced interactions such as file uploads and downloads.


# Architecture:

- Page Object Model (POM): Using POM to encapsulate the page structure and interactions will make tests more readable and easier to maintain.
Configuration Management:

- Design: The modular test automation framework is organized into distinct layers: Fixtures for managing static and mock data, Support for custom commands and utility functions, Plugins for integrating third-party tools and custom configurations, Downloads for handling files generated during test execution, and Reports for generating and managing test execution reports. This separation ensures scalability, maintainability, and a clear structure for the framework.

- Config File: In Playwright, centralized configuration files are used to manage environment-specific variables by placing them in a dedicated configuration file, typically named playwright.config.js. This file can be configured to handle different environments like dev, staging, and production.

# Exercise One : UI End-To-End Automation Framework

# Exercise Two : Addressing Test Automation Challenges

Conclusion
By following the above strategies, the MyBookings test automation framework will be robust, scalable, and easy to maintain. The framework will not only empower the engineering team to deliver quality software quickly but also ensure that the automated tests remain reliable and trustworthy over time.

