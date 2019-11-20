module.exports = {
    'Return to landing from appointments view' : function (browser) {
        browser
            .url('http://localhost:8080/appointments')
            .waitForElementVisible('.appointments-wrapper', 1000)
            .pause(1000)
            .click('.appointments-wrapper > div > button')
            .pause(1000)
            .waitForElementVisible('.landing-wrapper', 1000)
            .pause(1000)
            .end();
    }
};