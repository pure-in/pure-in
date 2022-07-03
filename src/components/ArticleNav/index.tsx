import { ArticleType, client, CustomPrismicDoc } from 'core/prismic';
import { selectorProps } from 'core/redux/store';
import React, { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as prismic from '@prismicio/client';
const ArticleNav = () => {
	const currentArticle = useSelector<selectorProps, CustomPrismicDoc<ArticleType> | null>(
		(state) => state.prismic.currentArticle
	);
	const [NextUid, setNextUid] = useState<string | null>(null);
	const [PrevUid, setPrevUid] = useState<string | null>(null);
	useEffect(() => {
		if (!currentArticle) {
			return;
		}
		client
			.getSingle('articles', {
				predicates: [
					prismic.predicate.dateBefore(
						'document.first_publication_date',
						currentArticle.first_publication_date
					),
				],
			})
			.then((res) => {
				setPrevUid(res.uid);
			});

		client
			.getSingle('articles', {
				predicates: [
					prismic.predicate.dateAfter(
						'document.first_publication_date',
						currentArticle.first_publication_date
					),
				],
			})
			.then((res) => {
				setNextUid(res.uid);
			});
	}, []);

	return (
		<section className="container">
			<div className="">
				{NextUid && (
					<Link
						className="flex-sc float-left gap-3 text-primary"
						to={`/artikel${NextUid}`}
					>
						<AiOutlineLeft /> Next
					</Link>
				)}
				{PrevUid && (
					<Link
						className="flex-sc float-right gap-3 text-primary"
						to={`/artikel${PrevUid}`}
					>
						Prev <AiOutlineRight />
					</Link>
				)}
			</div>
		</section>
	);
};

export default ArticleNav;

