import React, { Reducer, useReducer, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SliceZone, usePrismicDocumentByUID, useSinglePrismicDocument } from '@prismicio/react';
import { NotFound } from './NotFound';
import PagesLayout from 'layouts/PagesLayout';
import { components } from 'slices';
import { Loader } from 'components/Loader';
import {
	Action,
	CustomPrismicDoc,
	getByUID,
	getPageByRoute,
	initialState,
	LayoutType,
	PageType,
	PrismicState,
	reducer,
} from 'core/prismic';

import * as prismicH from '@prismicio/helpers';

/**
 * Website page component
 */
export const CustomPage = () => {
	const { route = '/' } = useParams();

	if (!route) return <NotFound />;

	const [page, pageDispatch] = useReducer<Reducer<PrismicState<PageType>, Action>>(
		reducer,
		initialState
	);
	const [layout, layoutDispatch] = useReducer<Reducer<PrismicState<LayoutType>, Action>>(
		reducer,
		initialState
	);

	const [Loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		async function queryPageData(route: string) {
			pageDispatch({ type: 'start' });
			const pageData = await getPageByRoute(route)
				.then((res) => {
					pageDispatch({
						type: 'succeed',
						data: res.data,
					});

					return res.data;
				})
				.catch((err) => {
					pageDispatch({ type: 'fail', error: err });
					return null;
				});
			if (pageData && prismicH.isFilled.link(pageData.layout) && pageData.layout.uid) {
				layoutDispatch({ type: 'start' });
				getByUID<CustomPrismicDoc<LayoutType>>('layouts', pageData.layout.uid)
					.then((res) => {
						layoutDispatch({ type: 'succeed', data: res.data });
					})
					.catch((err) => {
						layoutDispatch({ type: 'fail', error: err });
						return null;
					});
			}
		}
		queryPageData(route);
	}, [route]);

	useEffect(() => {
		if (page.state === 'loaded' && layout.state === 'loaded') setLoading(false);
		if (page.state === 'failed' || layout.state === 'failed') setNotFound(true);
	}, [page.state, layout.state]);

	if (Loading && !notFound) return <Loader />;

	if (!notFound && page.data && layout.data)
		return (
			<PagesLayout content={layout.data}>
				<SliceZone slices={page.data.body} components={components} />
			</PagesLayout>
		);

	return <NotFound />;
};

