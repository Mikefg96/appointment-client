module.exports = {
    'Catalogue && service register form load' : function (browser) {
      browser
        .url('http://localhost:8080/')
        .waitForElementVisible('.landing-wrapper', 1000)
        .click('#btnCatalogue')
        .pause(1500)
        .waitForElementVisible('.services-wrapper', 1000)
        .click('#btnLoadServiceRegister')
        .waitForElementVisible('.serviceRegister-wrapper', 1000)
        .pause(1500)
        .end();
    }
};