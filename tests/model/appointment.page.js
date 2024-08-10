class AppointmentPage {
    constructor(page) {
        this.page = page;
    }

    // Define elements using Playwright locators
    get elements() {
        return {
            addAppointmentButton: this.page.locator('button#addAppointment'),
            titleInput: this.page.locator('input#title'),
            dateInput: this.page.locator('input#date'),
            timeInput: this.page.locator('input#time'),
            saveButton: this.page.locator('button#save'),
        };
    }

    // Method to add a new appointment
    async addNewAppointment(title, date, time) {
        await this.elements.addAppointmentButton.click();
        await this.elements.titleInput.fill(title);
        await this.elements.dateInput.fill(date);
        await this.elements.timeInput.fill(time);
        await this.elements.saveButton.click();
    }

    // Method to check if the appointment is visible
    async isAppointmentVisible(title) {
        return await this.page.isVisible(`text=${title}`);
    }
}

module.exports = { AppointmentPage };
