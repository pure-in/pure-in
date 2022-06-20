import * as prismicT from '@prismicio/types';

export type Primary = {
	title: prismicT.TitleField;
	description: prismicT.RichTextField;
	copyright: prismicT.RichTextField;
	email: prismicT.KeyTextField;
	phone: prismicT.KeyTextField;
};

type Item = {
	label: prismicT.KeyTextField;
	route: prismicT.KeyTextField;
};

export type FooterType = prismicT.Slice<'footermain', Primary, Item>;
export { default } from './Footer';

