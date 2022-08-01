import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import Home from './Home';
import { unmountComponentAtNode } from 'react-dom';

let container: HTMLDivElement | null = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

describe('Render the Home component', () => {
	it('Render empty component', async () => {
		act(() => {
			render(<Home />, { container });
		});

		const item = screen.getByTestId("presentation-test");

		expect(item).toBeInTheDocument();
	});
});
