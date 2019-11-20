module.exports = {
    'Return to landing from register form' : function (browser) {
      browser
        .url('http://localhost:8080/services')
        .waitForElementVisible('.services-wrapper', 1000)
        .click('.services-wrapper > .row > .col-4:first-child > div > div:last-child > button')
        .pause(1500)
        .waitForElementVisible('.register-wrapper', 1000)
        .click('.register-wrapper > .row > .col-6:last-child > div > div:nth-child(2) > button:last-child')
        .pause(1500)
        .waitForElementVisible('.services-wrapper', 1000)
        .end();
    }
};