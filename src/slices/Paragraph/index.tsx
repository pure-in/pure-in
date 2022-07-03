import React from 'react';
import * as prismicT from '@prismicio/types';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

type Primary = {
	content: prismicT.RichTextField;
};

export type ParagraphType = prismicT.Slice<'paragraph', Primary>;

const ParagraphComponent = ({ children }: { children: React.ReactNode }) => (
	<p className="mb-4 text-opacity-75">{children}</p>
);

const Paragraph = ({ slice }: SliceComponentProps<ParagraphType>) => {
	return (
		<section className="my-5 w-full">
			<div className="container">
				<PrismicRichText
					field={slice.primary.content}
					components={{ paragraph: ParagraphComponent }}
				/>
			</div>
		</section>
	);
};

export default Paragraph;

