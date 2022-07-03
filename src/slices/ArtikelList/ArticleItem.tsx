import { PrismicImage } from '@prismicio/react';
import { ArticleType } from 'core/prismic';
import React from 'react';
import { Link } from 'react-router-dom';
type Props = {
	data: ArticleType;
	uid: string | null;
	createdAt: string;
};
import { asText } from '@prismicio/richtext';
import { formatRelative } from 'date-fns';

const ArticleItem = ({ data, uid, createdAt }: Props) => {
	const { thumbnail, title, createdat } = data;

	return (
		<div className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md ">
			<Link to={`/artikel/${uid}`}>
				<PrismicImage
					field={thumbnail}
					className=" rounded-t-md overflow-hidden  w-full h-72 object-cover"
				/>
			</Link>
			<div className="p-5">
				<Link to={`/artikel/${uid}`}>
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
						{asText(title)}
					</h5>
				</Link>
				<div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
					{createdat && formatRelative(new Date(createdAt), new Date())}
				</div>
				<Link
					to={`/artikel/${uid}`}
					className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 "
				>
					Read more
					<svg
						className="ml-2 -mr-1 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						></path>
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default ArticleItem;

