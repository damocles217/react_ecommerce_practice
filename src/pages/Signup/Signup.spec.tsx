import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Signup from './Signup';

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

describe('Must render the Signup Page', () => {
	it('Must render the page', () => {
		render(<Signup />, { container });

		const mainContent = screen.getByTestId('signup-page');
		expect(mainContent).toBeInTheDocument();
	});
});
