const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../model/login.page');
const { AppointmentPage } = require('../../model/appointment.page');

test.describe('Edit Appointment Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('username', 'password');
    });

    test('should edit an existing appointment and verify changes', async ({ page }) => {
        const appointmentPage = new AppointmentPage(page);
        await appointmentPage.addNewAppointment('Meeting with Client', '2024-08-15', '14:00');
        // Assuming we have a method to edit an appointment, pseudocode here
        await appointmentPage.editAppointment('Meeting with Client', 'Updated Meeting', '2024-08-16', '15:00');
        const isVisible = await appointmentPage.isAppointmentVisible('Updated Meeting');
        expect(isVisible).toBe(true);
        const isNotVisible = await appointmentPage.isAppointmentVisible('Meeting with Client');
        expect(isNotVisible).toBe(false);
    });
});
