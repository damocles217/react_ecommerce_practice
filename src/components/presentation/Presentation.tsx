import React, { ComponentType } from 'react';
import style from './sass/Presentation.module.scss';

const Presentation: ComponentType = () => {
	return (
		<main className={style.main} data-testid="presentation-test">
			<section className={style.main__title}>
				Hi there, this is an example of an e-commerce
			</section>
			<section className={style.main__paragraph}>
				<p>
					It&apos;s made with the following technologies. This is just an
					example for show my skills. Not a real Ecommerce
				</p>
				<br />
				<p>
					Also, the technologies listed are what I used for build this
					application:
				</p>
				<ul>
					<li>Reactjs</li>
					<li>Typescript</li>
					<li>Nestjs {'(with fastify)'}</li>
					<li>Go {'(gin framework'}</li>
					<li>Python {'(Django)'}</li>
					<li>Redis</li>
					<li>Mongodb</li>
					<li>MySQL</li>
				</ul>
			</section>
		</main>
	);
};

export default Presentation;
