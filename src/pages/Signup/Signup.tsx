import React, { ComponentType, lazy, Suspense } from 'react';
import styleGlobal from '../index.module.scss';
const SignForm = lazy(() => import('@src/components/SignForm/SignForm'));

const Signup: ComponentType = () => {
	return (
		<div data-testid="signup-page" className={styleGlobal.pageContent}>
			<h3>Hi there {';)'}</h3>
			<Suspense fallback={<div />}>
				<SignForm />
			</Suspense>
		</div>
	);
};

export default Signup;
