const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../model/login.page');
const { AppointmentPage } = require('../../model/appointment.page');

test.describe('Delete Appointment Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('username', 'password');
    });

    test('should delete an appointment and verify its removal', async ({ page }) => {
        const appointmentPage = new AppointmentPage(page);
        await appointmentPage.addNewAppointment('Meeting with Client', '2024-08-15', '14:00');
        // Assuming we have a method to delete an appointment, pseudocode here
        await appointmentPage.deleteAppointment('Meeting with Client');
        const isVisible = await appointmentPage.isAppointmentVisible('Meeting with Client');
        expect(isVisible).toBe(false);
    });
});
