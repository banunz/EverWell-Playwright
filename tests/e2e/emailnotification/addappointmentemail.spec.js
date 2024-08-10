const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../model/login.page');
const { AppointmentPage } = require('../../model/appointment.page');

test.describe('Add Appointment Email Notification Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('username', 'password');
    });

    test('should send email notification after adding an appointment', async ({ page }) => {
        const appointmentPage = new AppointmentPage(page);
        await appointmentPage.addNewAppointment('Meeting with Client', '2024-08-15', '14:00');
        // Add steps to verify email notification was sent
    });
});
