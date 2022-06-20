import * as prismic from '@prismicio/client';
import * as prismicT from '@prismicio/types';
import { NavbarType } from 'slices/Navbar';
import { FooterType } from 'slices/FooterMain';
import { ChildrenType } from 'slices/Children';
import { TitleType } from 'slices/Title';
import { HeroWithSaweriaType } from 'slices/HeroWithSaweria';
import { KualitasUdaraType } from 'slices/KualitasUdara';

export const repositoryName = 'pure-in';

export const client = prismic.createClient(repositoryName);

export type PrismicState<TData> = {
	state: 'idle' | 'loading' | 'loaded' | 'failed';
	data?: TData;
	error?: Error;
};

export type Action =
	| { type: 'start' }
	| { type: 'succeed'; data: any }
	| { type: 'fail'; error: Error };

export const reducer = <TData>(state: PrismicState<TData>, action: Action): PrismicState<TData> => {
	switch (action.type) {
		case 'start':
			return { state: 'loading' };
		case 'succeed':
			return { state: 'loaded', data: action.data };
		case 'fail':
			return {
				...state,
				state: 'failed',
				error: action.error,
			};
		default:
			return state;
	}
};

export const getPageByRoute = (route: string) => {
	return client.getSingle<CustomPrismicDoc<PageType>>('pages', {
		predicates: [prismic.predicate.at('my.pages.route', route)],
	});
};

export const getByUID = <TDoc extends prismicT.PrismicDocument>(type: string, uid: string) =>
	client.getByUID<TDoc>(type, uid);

export const initialState: PrismicState<never> = {
	state: 'idle',
};

export type SlicesPage = TitleType | HeroWithSaweriaType | KualitasUdaraType;
export type SlicesLayout = NavbarType | FooterType | ChildrenType;

export type SliceZonePageType = prismicT.SliceZone<SlicesPage>;
export type SliceZoneLayoutType = prismicT.SliceZone<SlicesLayout>;

export type PageType = {
	html_title: prismicT.KeyTextField;
	route: prismicT.KeyTextField;
	layout: prismicT.RelationField<'layouts'>;
	body: SliceZonePageType;
};

export type LayoutType = {
	uid: prismicT.KeyTextField;
	body: SliceZoneLayoutType;
};

export type CustomPrismicDoc<DocType> = prismicT.PrismicDocument & {
	data: DocType;
};

