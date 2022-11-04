import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Masseges from '../pages/Masseges';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import SavedPosts from '../pages/SavedPosts';
import Settings from '../pages/Settings';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/messages' element={<Masseges />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='/saved-posts' element={<SavedPosts />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
