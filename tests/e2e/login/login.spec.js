test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('username', 'password');
    expect(await loginPage.isLoggedIn()).toBeTruthy();
});
