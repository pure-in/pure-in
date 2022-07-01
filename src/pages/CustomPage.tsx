import React, { Reducer, useReducer, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SliceZone } from '@prismicio/react';
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

export const CustomPage = () => {
	const { route = '/' } = useParams();

	const [page, pageDispatch] = useReducer<Reducer<PrismicState<PageType>, Action>>(
		reducer,
		initialState
	);
	const [layout, layoutDispatch] = useReducer<Reducer<PrismicState<LayoutType>, Action>>(
		reducer,
		initialState
	);
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		async function queryPageData(route: string) {
			pageDispatch({ type: 'start' });
			setLoading(true);
			const formatedRoute = route !== '/' ? `/${route}` : route;
			const pageData = await getPageByRoute(formatedRoute)
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

			if (
				pageData &&
				prismicH.isFilled.contentRelationship(pageData.layout) &&
				pageData.layout.uid
			) {
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
		if (page.state === 'loaded' && layout.state === 'loaded') {
			setLoading(false);
		}
	}, [page.state, layout.state]);

	if (Loading) return <Loader className="w-screen h-screen" />;

	if (page.data && layout.data)
		return (
			<PagesLayout content={layout.data}>
				<SliceZone slices={page.data.body} components={components} />
			</PagesLayout>
		);

	return <NotFound />;
};

