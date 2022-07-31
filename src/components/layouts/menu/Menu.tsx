import React, { ComponentType, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './sass/Menu.module.scss';
import { dropMenuController, isDrop } from './menu.utils';

const Menu: ComponentType = () => {
	const [click, setClick] = useState<number>(0);

	return (
		<header data-testid="header" className={style.header}>
			<button
				className={`${style.header__button} icon`}
				onClick={() => dropMenuController(click, setClick)}
			>
				C
			</button>
			<nav
				data-testid="drop-menu"
				className={`${style.header__menu}  ${isDrop(click)}`}
			>
				<Link
					to="/"
					className={style.menu__link}
					onClick={() => dropMenuController(click, setClick)}
				>
					Main
				</Link>
				<Link
					to="/login"
					className={style.menu__link}
					onClick={() => dropMenuController(click, setClick)}
				>
					Log in
				</Link>
				<Link
					to="/signup"
					className={style.menu__link}
					onClick={() => dropMenuController(click, setClick)}
				>
					Sign up
				</Link>
				<Link
					to="/about"
					className={style.menu__link}
					onClick={() => dropMenuController(click, setClick)}
				>
					About the app
				</Link>
			</nav>
		</header>
	);
};

export default Menu;
