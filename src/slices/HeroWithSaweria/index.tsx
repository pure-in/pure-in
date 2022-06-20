import * as prismicT from '@prismicio/types';

type Primary = {
	image: prismicT.ImageField;
	title: prismicT.TitleField;
	description: prismicT.RichTextField;
};

export type HeroWithSaweriaType = prismicT.Slice<'herowithsaweria', Primary>;

export { default } from './HeroWithSaweria';

