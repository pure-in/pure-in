import React from 'react';
import * as prismicT from '@prismicio/types';
import * as prismicH from '@prismicio/helpers';
import { PrismicImage, SliceComponentProps } from '@prismicio/react';

type Primary = {
	image: prismicT.ImageField;
};

export type AdsType = prismicT.Slice<'ads', Primary>;
const Ads = ({ slice }: SliceComponentProps<AdsType>) => {
	return (
		<section>
			<div className="container">
				{prismicH.isFilled.image(slice.primary.image) && (
					<PrismicImage
						width={slice.primary.image.dimensions.width}
						height={slice.primary.image.dimensions.height}
						field={slice.primary.image}
						className="max-h-52 w-auto"
					/>
				)}
			</div>
		</section>
	);
};

export default Ads;

