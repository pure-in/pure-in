import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { TitleType } from '.';

const Title = ({ slice }: SliceComponentProps<TitleType>) => {
	return (
		<section className="w-full container">
			<PrismicRichText field={slice.primary.title} />
		</section>
	);
};

export default Title;

