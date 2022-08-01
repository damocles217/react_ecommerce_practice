import { act, render, screen, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Menu from './Menu';
import { dropMenuController, isDrop } from './menu.utils';

jest.mock('./menu.utils', () => ({
	dropMenuController: jest.fn(),
	isDrop: jest.fn(() => null),
}));

jest.mock('react-router-dom', () => {
	return {
		Link: jest.fn(() => (
			<a
				id="mock"
				data-testid="mock-anchor"
				onClick={() => dropMenuController(1, null)}
			>
				Main
			</a>
		)),
	};
});

let container: HTMLDivElement | null = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);

	act(() => {
		render(<Menu />, { container });
	});
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
	jest.clearAllMocks();
});

describe('Render the Menu', () => {
	it('Must render the Menu', () => {
		const dropMenu = screen.getByTestId('drop-menu');

		expect(dropMenu.children.length).toBe(9);
		expect(document.querySelectorAll('#mock').length).toBe(4);
	});

	it('Must render the header and call isDrop function', () => {
		const navBar = screen.getByTestId('header');

		expect(navBar.children.length).toBe(2);
		expect(isDrop).toHaveBeenCalledTimes(1);

		expect(isDrop(1)).toBe(null);
		// Also we can use strings
		expect(navBar).toHaveTextContent(/Main/);
	});

	it('Must render and click the button', () => {
		fireEvent.click(screen.getByRole('button'));

		expect(dropMenuController).toBeCalledTimes(1);
		expect(dropMenuController).toReturn();
	});

	it('Must render and click the label', () => {
		screen.getAllByTestId('mock-anchor').forEach(element => {
			fireEvent.click(element);
		});

		expect(dropMenuController).toBeCalledTimes(4);
	});
});
