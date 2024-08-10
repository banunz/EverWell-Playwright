class LoginPage {
    constructor(page) {
        this.page = page;
    }

    // Define elements using Playwright locators
    get elements() {
        return {
            usernameInput: this.page.locator('input#username'),
            passwordInput: this.page.locator('input#password'),
            loginButton: this.page.locator('button#login'),
            loggedInIndicator: this.page.locator('selector-for-logged-in-indicator'),
        };
    }

    // Navigate to the login page
    async goto() {
        await this.page.goto('https://mybookingcalendar.com/login');
    }
    
    // Perform login action
    async login(username, password) {
        await this.elements.usernameInput.fill(username);
        await this.elements.passwordInput.fill(password);
        await this.elements.loginButton.click();
    }

    // Verify if the user is logged in
    async isLoggedIn() {
        return await this.elements.loggedInIndicator.isVisible();
    }
}

module.exports = { LoginPage };
