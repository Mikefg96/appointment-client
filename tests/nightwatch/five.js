module.exports = {
    'Test all return buttons' : function (browser) {
        browser
            .url('http://localhost:8080/')
            .waitForElementVisible('.landing-wrapper', 1000)
            .click('#btnCatalogue')
            .pause(1000)
            .waitForElementVisible('.services-wrapper', 1000)
            .click('#btnLoadServiceRegister')
            .pause(1000)
            .waitForElementVisible('.serviceRegister-wrapper', 1000)
            .click('.btnReturnToServices')
            .pause(1000)
            .waitForElementVisible('.services-wrapper', 1000)
            .click('.btnLoadAppointmentForm')
            .pause(1000)
            .waitForElementVisible('.register-wrapper', 1000)
            .click('.btnReturnToServices')
            .pause(1000)
            .waitForElementVisible('.services-wrapper', 1000)
            .click('#btnReturnToLanding')
            .pause(1000)
            .waitForElementVisible('.landing-wrapper', 1000)
            .click('#btnAppointments')
            .pause(1000)
            .waitForElementVisible('.appointments-wrapper', 1000)
            .click('#btnReturnToLanding')
            .pause(1000)
            .waitForElementVisible('.landing-wrapper', 1000)
            .end();
    }
};