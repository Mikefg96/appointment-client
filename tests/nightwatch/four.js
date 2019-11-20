/*
    La prueba tronará si no existe una cita agendada debido a que
    no se encontrará el elemento deseado.
*/

module.exports = {
    'Appointments load and delete one' : function (browser) {
        browser
            .url('http://localhost:8080/')
            .waitForElementVisible('.landing-wrapper', 1000)
            .pause(1000)
            .click('.row > .col-6:first-child > div > button:last-child')
            .pause(1000)
            .waitForElementVisible('.appointments-wrapper', 1000)
            .click('tbody > tr > td:last-child')
            .pause(1000)
            .end();
    }
};