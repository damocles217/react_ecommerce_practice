import { act, screen, render } from '@testing-library/react';
import React from 'react';
import { Route, MemoryRouter, Routes } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';
import Home from '@src/pages/Home/Home';
import Signup from '@src/pages/Signup/Signup';
import App from './App';

jest.mock('../pages/Home/Home', () =>
	jest.fn(() => <div data-testid="mocked">Hello World</div>),
);

jest.mock('./App', () => {
	return jest.fn(() => (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>
	));
});

let container: HTMLElement | null = null;
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);

	jest.clearAllMocks();
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

describe('Render the App component', () => {
	test('Must run the main page', async () => {
		act(() => {
			render(
				<MemoryRouter initialEntries={['/']}>
					<App />
				</MemoryRouter>,
				{ container: container },
			);
		});
		expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
		const element = await screen.findByTestId('mocked');
		expect(element.textContent).toBe('Hello World');
	});

	test('Must run the sign page', () => {
		render(
			<MemoryRouter initialEntries={['/signup']}>
				<App />
			</MemoryRouter>,
			{ container },
		);

		expect(screen.getByTestId('signup-page')).toBeInTheDocument();
	});
});
