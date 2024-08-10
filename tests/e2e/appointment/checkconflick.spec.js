const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../model/login.page');
const { AppointmentPage } = require('../../model/appointment.page');

test.describe('Check Appointment Conflict Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('username', 'password');
    });

    test('should detect conflict when adding overlapping appointments', async ({ page }) => {
        const appointmentPage = new AppointmentPage(page);
        await appointmentPage.addNewAppointment('Meeting with Client', '2024-08-15', '14:00');
        // Assuming we have a method to check conflicts, pseudocode here
        await appointmentPage.addNewAppointment('Another Meeting', '2024-08-15', '14:30');
        const hasConflict = await appointmentPage.hasConflict();
        expect(hasConflict).toBe(true);
    });
});
