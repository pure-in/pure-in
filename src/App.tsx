import React from 'react';
import { PrismicProvider, PrismicToolbar } from '@prismicio/react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { client, repositoryName } from 'core/prismic';
import { CustomPage } from 'pages/CustomPage';
import { NotFound } from 'pages/NotFound';
import 'core/styles/tailwind.css';
import 'core/styles/typefaces.css';

export const App = () => {
	return (
		<PrismicProvider
			client={client}
			internalLinkComponent={({ href, ...props }) => <Link to={href} {...props} />}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CustomPage />} />
					<Route path="/:route" element={<CustomPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<PrismicToolbar repositoryName={repositoryName} />
		</PrismicProvider>
	);
};

