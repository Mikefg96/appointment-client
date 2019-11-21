module.exports = {
    'Load appointments and delete one' : function (browser) {
        browser
            .url('http://localhost:8080/')
            .waitForElementVisible('.landing-wrapper', 1000)
            .pause(1000)
            .click('#btnAppointments')
            .pause(1000)
            .waitForElementVisible('.appointments-wrapper', 1000)
            .click('#btnDeleteAppointment')
            .pause(1000)
            .end();
    }
};