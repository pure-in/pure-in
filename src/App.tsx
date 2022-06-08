import React from 'react';
import { PrismicProvider, PrismicToolbar } from '@prismicio/react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { client, repositoryName } from 'core/prismic';
import { Preview } from 'pages/Preview';
import { CustomPage } from 'pages/CustomPage';
import { NotFound } from 'pages/NotFound';

export const App = () => {
	return (
		<PrismicProvider
			client={client}
			internalLinkComponent={({ href, ...props }) => <Link to={href} {...props} />}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/preview" element={<Preview />} />
					<Route path="/" element={<CustomPage />} />
					<Route path="/:route" element={<CustomPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<PrismicToolbar repositoryName={repositoryName} />
		</PrismicProvider>
	);
};

