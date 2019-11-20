module.exports = {
    'Catalogue load' : function (browser) {
      browser
        .url('http://localhost:8080/')
        .waitForElementVisible('.landing-wrapper', 1000)
        .click('.row > .col-6:first-child > div > button:first-child')
        .pause(1500)
        .waitForElementVisible('.services-wrapper > .row > .col-4 > div', 1000)
        .end();
    }
};