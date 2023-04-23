/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');

declare namespace CodeceptJS {
	type SupportObject = {
		I: I; current: any;
	};
	type Methods = Record<string, unknown> & Playwright;
	type I = Record<string, unknown> & ReturnType<steps_file>;
	namespace Translation {
		type Actions = Record<string, unknown>;
	}
}
