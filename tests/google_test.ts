Feature('Home');

Scenario('Visit the home page', ({I}) => {
	I.amOnPage('/');

	I.see('Hello, world!');

	I.seeElement('//img[@src= "/images/test.jpg"]');
	// I.seeElement('//img[@="Test Image"]');
	// src: '/images/test.jpg'
});
