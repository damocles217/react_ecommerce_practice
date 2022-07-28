import React, { ComponentType, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Menu from './layouts/menu/Menu';
const Home = lazy(() => import('@src/pages/Home/Home'));

const App: ComponentType = () => {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
