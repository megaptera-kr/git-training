import ReactDom from 'react-dom/client';
import App from './App';

const element = document.getElementById('root');

function main() {
	if (!element) {
		return;
	}

	const root = ReactDom.createRoot(element);
	root.render(<App />);
}

main();

