import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	return (
		<div>
   hello world!
		</div>
	);
}

function main() {
	const element = document.getElementById('root');

	if (!element) {
		return;
	}

	const root = ReactDOM.createRoot(element);

	root.render((<App />));
}

main();
