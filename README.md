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
- Test Automation Framework: 
I assume the application has a well-defined frontend (React) and backend (.NET 6+), making it suitable for modern test automation tools like Cypress or Playwright.
- Test Environment: 
I assume that the environment is stable and that the team can integrate automated tests into a CI/CD pipeline.
- User Expertise:
The users of the test automation framework (engineers) have varying levels of experience with test automation, so the framework should be easy to use and well-documented.

# Technology Choices: Test Automation Tool:

- ### Primary Choice: Playwright.
Reason:The choice of technology for this application would be Playwright due to its ability to directly communicate with browsers, eliminating the need for an intermediary WebDriver, as required by Selenium. This direct interaction allows Playwright to automatically wait for elements to be available, reducing the risk of flaky tests and eliminating the need for manual synchronization. Additionally, Playwright offers robust cross-browser support, including Chromium, Firefox, and WebKit, enabling comprehensive testing across multiple environments. It also handles complex scenarios, such as multi-tab browsing and advanced interactions, more effectively than both Selenium and Cypress, making it the optimal choice for this application.

- ### Secondary Choice: Cypress.
Reason: Cypress Limitations The architecture of both Cypress and Playwright differs from Selenium in that they allow direct communication with the browser, enabling automatic waiting for elements until they become available. This advanced approach significantly reduces flakiness compared to Selenium. However, Cypress has its own limitations. It does not support multiple browsers or tabs, although there are workarounds available. Additionally, Cypress does not support mobile app testing and has difficulty running tests in parallel across multiple machines. While Cypress is easy to get started with, implementing complex scenarios, such as those requiring advanced interfaces, requires a deeper understanding of the framework.

- ### Third Choice : selenium
Cypress or Playwright vs. Selenium When compared to Selenium, I have chosen Cypress or Playwright due to significant architectural differences. Selenium’s architecture does not allow it to directly communicate with web browsers. Instead, it requires a built-in WebDriver, which acts as an intermediary between the test code and the browser. This design introduces several limitations, such as the need to define explicit or implicit waits, making the UI more flaky and unstable. Additionally, Selenium lacks built-in reporting and may struggle to handle complex scenarios like CAPTCHA, multi-tab browsing, and advanced interactions such as file uploads and downloads.


# Architecture:

- Page Object Model (POM): Using POM to encapsulate the page structure and interactions will make tests more readable and easier to maintain.

- Design: The modular test automation framework is organized into distinct layers: Fixtures for managing static and mock data, Support for custom commands and utility functions, Plugins for integrating third-party tools and custom configurations, Downloads for handling files generated during test execution, and Reports for generating and managing test execution reports. This separation ensures scalability, maintainability, and a clear structure for the framework.

- Config File: In Playwright, centralized configuration files are used to manage environment-specific variables by placing them in a dedicated configuration file, typically named playwright.config.js. This file can be configured to handle different environments like dev, staging, and production.

# Exercise One : UI End-To-End Automation Framework

###structure

├───tests
│   ├───e2e
│   │   ├───appointment
│   │   │       addappointment.spec.js
│   │   │       checkconflick.spec.js
│   │   │       deleteappointment.spec.js
│   │   │       displayappointment.spec.js
│   │   │       editappointment.spec.js
│   │   │       saveappointment.spec.js
│   │   │
│   │   ├───calendar
│   │   │       filtercalandar.spec.js
│   │   │       viewcalendar.spec.js
│   │   │
│   │   ├───emailnotification
│   │   │       addappointmentemail.spec.js
│   │   │       deleteappointmentemail.spec.js
│   │   │       editappointmentemail.spec.js
│   │   │
│   │   └───login
│   │           forgotmypassword.spec.js
│   │           login.spec.js
│   │           logout.spec.js
│   │           signup.spec.js
│   │
│   ├───fixture
│   │       Lead Test Automation Engineer - Technical Exercise.pdf
│   │
│   ├───model
│   │       appointment.page.js
│   │       home.page.js
│   │       login.page.js
│   │
│   └───support
├───playwright-report
│       index.html
│
├───test-results
│       .last-run.json



# Exercise Two : Addressing Test Automation Challenges
### Flaky Test: Root Cause Analysis and Stabilization Strategies
#### Root Cause Analysis:
Flaky tests can erode confidence in the test automation suite. To address them effectively, it's essential to investigate and identify patterns that cause instability. Common culprits include timing issues, dependencies on external systems, and unstable environments.

### Strategies for Stabilizing Flaky Tests
#### Strategy 1: Retries

Playwright supports test retries. When enabled, failing tests will be retried multiple times until they pass, or until the maximum number of retries is reached. By default, failing tests are not retried.
```
 Give failing tests 3 retry attempts
npx playwright test --retries=3
```

#### Strategy 2: Serial Mode

Use test.describe.serial() to group dependent tests to ensure they always run together and in order. If one of the tests fails, all subsequent tests are skipped. All tests in the group are retried together.

#### Strategy 3: SlowMo

Using slowMo: 200 inside playwright.config.js can help stabilize tests by slowing down execution. Reducing the number of workers can also help. Initially using 4 workers may cause tests to run too quickly before elements are fully loaded, leading to flakiness. Adjusting to 2 workers and setting slowMo: 50 has resulted in faster, more reliable test runs.

```sh
module.exports = defineConfig({
  use: {
    launchOptions: {
      slowMo: 200,
    }
  }
});
```
#### Strategy 4: Pick Good Selectors

When an application changes, the locators used to identify elements often change as well. Combat this by using strongly consistent element attributes, such as data-cy or data-test-id.
```sh
<button
  data-test-id={`test-actions-${testId}`}
/>
```

#### Strategy 5: "Wait Until" Checkpoints

Write application-specific logic to ensure the application is in a specific state before proceeding. For instance, if you need to wait for a calculation to complete, you might write:
```sh
await page.waitForSelector('[aria-label="calculation"] text=29.76');
```

#### Strategy 6: Iterative Loops

Use loops to run tests multiple times, which can help identify flaky behavior. For example:
```sh
cypress._.times(20, (k) => {
  // Test case logic here
});

for (let k = 0; k <= 10; k++) {
  it(`Test case ${k}`, () => {
    // Test case logic here
  });
}
```

#### Strategy 7: Command Sequencing

Avoid executing commands like click() and type() simultaneously as they may fail if executed asynchronously. Ensure one command is completed and asserted before proceeding to the next.

####  Conclusion: Can We Eliminate Flaky Tests Forever?
No.

An engineering team can be proactive and significantly reduce the time spent maintaining end-to-end tests by applying these strategies. However, as long as an application is actively developed, the time required for test maintenance will never be zero.

Test automation helps ensure that QA efforts are focused on new feature development, rather than endlessly covering existing features with every application change.

#### Conclusion
By following the above strategies, the MyBookings test automation framework will be robust, scalable, and easy to maintain. The framework will not only empower the engineering team to deliver quality software quickly but also ensure that the automated tests remain reliable and trustworthy over time.


