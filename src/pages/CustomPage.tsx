import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SliceZone, useSinglePrismicDocument } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import { NotFound } from './NotFound';
import PagesLayout from 'layouts/PagesLayout';
import { components } from 'slices';

/**
 * Website page component
 */
export const CustomPage = () => {
	const { route = '/' } = useParams();

	if (!route) return <NotFound />;

	const [page, pageState] = useSinglePrismicDocument('pages', {
		predicates: [prismic.predicate.at('my.pages.route', route)],
	});

	const notFound = pageState.state === 'failed';

	useEffect(() => {
		if (pageState.state === 'failed') {
			console.warn(
				'Page document was not found. Make sure it exists in your Prismic repository'
			);
		}
	}, []);

	if (page) {
		return (
			<PagesLayout>
				<SliceZone slices={page.data.body} components={components} />
			</PagesLayout>
		);
	}

	if (notFound) return <NotFound />;

	return null;
};

