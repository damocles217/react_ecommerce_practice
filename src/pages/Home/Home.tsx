import Presentation from '@src/components/presentation/Presentation';
import React, { ComponentType } from 'react';
import styleGlobal from '../index.module.scss';

const Home: ComponentType = () => {
	return (
		<div className={styleGlobal.pageContent}>
			<Presentation />
		</div>
	);
};

export default Home;
