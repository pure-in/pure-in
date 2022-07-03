import React from 'react';
import { PrismicProvider, PrismicToolbar } from '@prismicio/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { client, repositoryName } from 'core/prismic';
import { CustomPage } from 'pages/CustomPage';
import { NotFound } from 'pages/NotFound';
import 'core/styles/tailwind.css';
import 'core/styles/typefaces.css';
import ArtikelPage from 'pages/ArtikelPage';

export const App = () => {
	return (
		<PrismicProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CustomPage />} />
					<Route path="/arikel/:uid" element={<ArtikelPage />} />
					<Route path="/:route" element={<CustomPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<PrismicToolbar repositoryName={repositoryName} />
		</PrismicProvider>
	);
};

