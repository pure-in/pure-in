import React, { useEffect, useState } from 'react';
import * as prismicT from '@prismicio/types';
import { PrismicImage, SliceComponentProps } from '@prismicio/react';
import { ArticleType, client, CustomPrismicDoc } from 'core/prismic';
import ArticleItem from './ArticleItem';

type Primary = {
	articelamount: prismicT.NumberField;
};

export type ArtikelListType = prismicT.Slice<'artikellist', Primary>;

const ArtikelList = ({ slice }: SliceComponentProps<ArtikelListType>) => {
	const [Articles, setArticles] = useState<CustomPrismicDoc<ArticleType>[]>([]);
	useEffect(() => {
		const { articelamount } = slice.primary;
		client
			.getAllByType<CustomPrismicDoc<ArticleType>>('articles', {
				pageSize: articelamount ?? undefined,
			})
			.then((results) => {
				setArticles(results);
			});
	}, [slice]);

	return (
		<section className="my-5 w-full">
			<div className="container">
				<div className="grid md:grid-cols-3 gap-6">
					{Articles.map((article) => (
						<ArticleItem
							data={article.data}
							key={article.uid}
							uid={article.uid}
							createdAt={article.first_publication_date}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ArtikelList;

