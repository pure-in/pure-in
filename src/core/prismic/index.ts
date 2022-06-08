import * as prismic from '@prismicio/client';
import { TitleType } from 'slices/Title';

// Fill in your repository name
export const repositoryName = 'pure-in';

export const client = prismic.createClient(repositoryName, {
	routes: [
		{
			type: 'pages',
			path: '/:uid',
		},
	],
});

export type Slices = TitleType;
