import React from 'react';
import * as prismicT from '@prismicio/types';
import { PrismicImage, SliceComponentProps } from '@prismicio/react';

type Primary = {
	image: prismicT.ImageField;
};

export type ImageTypeType = prismicT.Slice<'image', Primary>;

const Image = ({ slice }: SliceComponentProps<ImageTypeType>) => {
	return (
		<div className="container flex-cc my-7">
			<PrismicImage className=" max-w-4xl w-full text-center" field={slice.primary.image} />
		</div>
	);
};

export default Image;

