const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../model/login.page');
const { AppointmentPage } = require('../../model/appointment.page');

test.describe('Save Appointment Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('username', 'password');
    });

    test('should save an appointment correctly', async ({ page }) => {
        const appointmentPage = new AppointmentPage(page);
        await appointmentPage.addNewAppointment('Meeting with Client', '2024-08-15', '14:00');
        // Verify that the appointment is saved correctly
        const isVisible = await appointmentPage.isAppointmentVisible('Meeting with Client');
        expect(isVisible).toBe(true);
    });
});
