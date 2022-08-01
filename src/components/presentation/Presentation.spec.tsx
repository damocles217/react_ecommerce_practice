import { render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Presentation from './Presentation';

let container: HTMLDivElement | null = null;

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ test: 100 }),
	}),
) as jest.Mock;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);

	render(<Presentation />, { container });
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

describe('Test the Presentation Component', () => {
	it('Must render the presentation', () => {
		expect(screen.getByText(/Hi there/i)).toBeInTheDocument();
		expect(screen.getByRole('main').children.length).toBe(2);
	});

	it('Render the unordered list', () => {
		expect(screen.getByRole('list').children.length).toBeGreaterThan(0);
	});
});
