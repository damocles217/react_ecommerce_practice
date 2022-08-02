import React, { ComponentType, lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Menu from './layouts/menu/Menu';
const Home = lazy(() => import('@src/pages/Home/Home'));
const Signup = lazy(() => import('@src/pages/Signup/Signup'));

const App: ComponentType = () => {
	return (
		<BrowserRouter>
			<Menu />
			<Suspense fallback={<div />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
