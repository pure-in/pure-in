import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { TitleType } from '.';

const Title = ({ slice }: SliceComponentProps<TitleType>) => {
	const { title, textalign = 'left' } = slice.primary;
	return (
		<section className="w-full container my-5">
			<PrismicRichText
				field={title}
				components={{
					heading2: ({ children }) => (
						<h2 className={`text-primary text-${textalign} text-4xl font-bold mb-10`}>
							{children}
						</h2>
					),
				}}
			/>
		</section>
	);
};

export default Title;

