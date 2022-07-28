import React, { ComponentType } from 'react';
import styleGlobal from '../index.module.scss';
import style from './Home.module.scss';

const Home: ComponentType = () => {
	return (
		<div className={styleGlobal.pageContent}>
			<div data-testid="login-form" className={style.data}>
				Hello World
			</div>
		</div>
	);
};

export default Home;
