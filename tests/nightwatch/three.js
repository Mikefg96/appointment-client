module.exports = {
    'Fill appointment form, submit, and return to landing' : function (browser) {
		browser
			.url('http://localhost:8080/services')
			.waitForElementVisible('.services-wrapper', 1000)
			.click('.btnLoadAppointmentForm')
			.pause(1000)
			.waitForElementVisible('.register-wrapper', 1000)
			.setValue('input[name="name"]', 'Miguel')
			.setValue('input[name="lastName"]', 'Flores')
			.pause(1000)
			.click('#btnRegister')
			.pause(1000)
			.waitForElementVisible('.landing-wrapper', 1000)
			.end();
    }
};