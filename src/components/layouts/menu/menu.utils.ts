import { Dispatch, SetStateAction } from 'react';
import style from './sass/Menu.module.scss';

// Select
export const dropMenuController = (
	state: number,
	setState: Dispatch<SetStateAction<number>>,
) => (state === 1 ? setState(0) : setState(1));

export const isDrop = (state: number) =>
	state === 0 ? style.hide : style.show;
