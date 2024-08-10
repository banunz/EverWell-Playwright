class CalendarPage {
    constructor(page) {
        this.page = page;
    }

    get elements() {
        return {
            newAppointmentButton: this.page.locator('[data-cy="newappointment"]'),
            mondayCalendar: this.page.locator('[data-cy="monday"]'),
            tuesdayCalendar: this.page.locator('[data-cy="tuesday"]'),
            wednesdayCalendar: this.page.locator('[data-cy="wednesday"]'),
            thursdayCalendar: this.page.locator('[data-cy="thursday"]'),
            fridayCalendar: this.page.locator('[data-cy="friday"]'),
            saturdayCalendar: this.page.locator('[data-cy="saturday"]'),
            sundayCalendar: this.page.locator('[data-cy="sunday"]'),
        };
    }

    async clickNewAppointment() {
        await this.elements.newAppointmentButton.click();
    }

    async selectDay(day) {
        const calendarElement = this.elements[`${day.toLowerCase()}Calendar`];
        await calendarElement.click();
    }

    // Add additional methods for interacting with the calendar as needed
}

module.exports = { CalendarPage };
