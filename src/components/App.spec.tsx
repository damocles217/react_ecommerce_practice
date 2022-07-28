import { act, screen, render } from '@testing-library/react';
import React from 'react';
import { Route, MemoryRouter, Routes } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';
import Home from '@src/pages/Home/Home';
import App from './App';

jest.mock('./App', () => {
	return jest.fn(() => (
		<MemoryRouter initialEntries={['/']}>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</MemoryRouter>
	));
});

let container: HTMLElement | null = null;
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});
test('Render the main page', async () => {
	act(() => {
		render(<App />, { container: container });
	});
	expect(screen.getByText('Hello World')).toBeInTheDocument();
	const element = await screen.findByTestId('login-form');
	expect(element.textContent).toBe('Hello World');
});
