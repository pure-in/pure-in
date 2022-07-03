import React, { Reducer, useReducer, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PrismicImage, SliceZone } from '@prismicio/react';
import { NotFound } from './NotFound';
import PagesLayout from 'layouts/PagesLayout';
import { components } from 'slices';
import { Loader } from 'components/Loader';
import {
	Action,
	ArticleType,
	CustomPrismicDoc,
	getByUID,
	initialState,
	LayoutType,
	PrismicState,
	reducer,
} from 'core/prismic';
import * as prismicH from '@prismicio/helpers';
import { asText } from '@prismicio/richtext';

const ArtikelPage = () => {
	const { uid = null } = useParams();
	if (!uid) return <NotFound />;

	const [page, pageDispatch] = useReducer<Reducer<PrismicState<ArticleType>, Action>>(
		reducer,
		initialState
	);
	const [layout, layoutDispatch] = useReducer<Reducer<PrismicState<LayoutType>, Action>>(
		reducer,
		initialState
	);
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		async function queryPageData(uid: string) {
			pageDispatch({ type: 'start' });
			setLoading(true);

			getByUID<any>('articles', uid)
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

			layoutDispatch({ type: 'start' });
			getByUID<CustomPrismicDoc<LayoutType>>('layouts', 'main-layout')
				.then((res) => {
					layoutDispatch({ type: 'succeed', data: res.data });
				})
				.catch((err) => {
					layoutDispatch({ type: 'fail', error: err });
					return null;
				});
		}

		queryPageData(uid);
	}, [uid]);

	useEffect(() => {
		if (page.state === 'loaded' && layout.state === 'loaded') {
			setLoading(false);
		}
	}, [page.state, layout.state]);

	if (Loading) return <Loader className="w-screen h-screen" />;

	if (page.data && layout.data)
		return (
			<PagesLayout content={layout.data}>
				<div className="section my-5 w-full">
					<div className="container">
						<PrismicImage
							field={page.data.thumbnail}
							className="max-h-96 w-full object-cover my-4"
						/>
						<h2 className="text-primary text-center text-4xl font-bold mb-10">
							{prismicH.isFilled.richText(page.data.title) && asText(page.data.title)}
						</h2>
					</div>
					<SliceZone slices={page.data.body} components={components} />
				</div>
			</PagesLayout>
		);

	return <NotFound />;
};

export default ArtikelPage;

