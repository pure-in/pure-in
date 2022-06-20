import * as prismicT from '@prismicio/types';

export type Primary = {
	title: prismicT.RichTextField;
};

export type TitleType = prismicT.Slice<'title', Primary>;
export { default } from './Title';

