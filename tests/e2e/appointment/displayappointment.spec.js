const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../model/login.page');
const { AppointmentPage } = require('../../model/appointment.page');

test.describe('Display Appointment Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('username', 'password');
    });

    test('should display appointment details correctly', async ({ page }) => {
        const appointmentPage = new AppointmentPage(page);
        await appointmentPage.addNewAppointment('Meeting with Client', '2024-08-15', '14:00');
        // Assuming we have a method to retrieve appointment details, pseudocode here
        const details = await appointmentPage.getAppointmentDetails('Meeting with Client');
        expect(details.title).toBe('Meeting with Client');
        expect(details.date).toBe('2024-08-15');
        expect(details.time).toBe('14:00');
    });
});
