import React from 'react';

export default function Greeting({name}: {name: string}) {
	return React.createElement('p', null, 'Hello, ', name, '!');
}
