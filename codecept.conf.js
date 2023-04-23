/* eslint-disable import/no-extraneous-dependencies */

const {setHeadlessWhen, setCommonPlugins} = require('@codeceptjs/configure');
// Turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// Enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
	tests: './tests/**/*_test.ts',
	output: './output',
	helpers: {
		Playwright: {
			url: 'http://localhost:8080',
			show: true,
			browser: 'chromium',
		},
	},
	include: {
		I: './tests/steps_file.ts',
	},
	name: 'frontend-survival-week02-answer',
};
