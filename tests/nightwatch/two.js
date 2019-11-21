TODO: 'Crear un after function para borrar el servicio de prueba creado por e2e.'
module.exports = {
    'Load services and create a new one' : function (browser) {
      browser
        .url('http://localhost:8080/services')
        .waitForElementVisible('.services-wrapper', 1000)
        .click('#btnLoadServiceRegister')
        .pause(1500)
        .waitForElementVisible('.serviceRegister-wrapper', 1000)
        .setValue('input[name="serviceName"]', 'Test Service')
        .setValue('input[name="servicePrice"]', 0)
        .pause(1000)
        .click('#btnAddService')
        .pause(1500)
        .waitForElementVisible('.services-wrapper', 1000)
        .end()
    }
};