import * as prismicT from '@prismicio/types';

export type Primary = {
	title: prismicT.RichTextField;
	textalign: prismicT.SelectField<'left' | 'right' | 'center'>;
};

export type TitleType = prismicT.Slice<'title', Primary>;
export { default } from './Title';

