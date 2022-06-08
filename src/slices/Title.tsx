import React from 'react';
import * as prismicT from '@prismicio/types';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

type Primary = {
	title: prismicT.RichTextField;
};

export type TitleType = prismicT.Slice<'title', Primary>;

const Title = ({ slice }: SliceComponentProps<TitleType>) => {
	return (
		<section className="w-full container">
			<PrismicRichText field={slice.primary.title} />
		</section>
	);
};

export default Title;

