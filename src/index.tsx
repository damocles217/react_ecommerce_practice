import React, { StrictMode } from 'react';
import App from '@src/components/App';
import { createRoot } from 'react-dom/client';

import './globals.scss';

const container = document.querySelector('#root');
// Use hydrateRoot when the bug is solved
// import { hydrateRoot } from "react-dom/client";
// hydrateRoot(container, <App />)
const root = createRoot(container);
root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
