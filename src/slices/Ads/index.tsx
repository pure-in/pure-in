import React from 'react';
import * as prismicT from '@prismicio/types';
import * as prismicH from '@prismicio/helpers';
import { PrismicImage, SliceComponentProps } from '@prismicio/react';

type Primary = {
	image: prismicT.ImageField;
	url: prismicT.KeyTextField;
};

export type AdsType = prismicT.Slice<'ads', Primary>;
const Ads = ({ slice }: SliceComponentProps<AdsType>) => {
	const { url, image } = slice.primary;

	return (
		<section>
			<div className="container my-5">
				{prismicH.isFilled.image(image) && url && (
					<a target={'_blank'} href={url} rel="noopener noreferrer">
						<PrismicImage
							width={image.dimensions.width}
							height={image.dimensions.height}
							field={image}
							className="max-h-52 w-auto"
						/>
					</a>
				)}
			</div>
		</section>
	);
};

export default Ads;

