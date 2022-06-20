import { SliceZone } from '@prismicio/react';
import useClearance from 'core/hooks/useClearance';
import { LayoutType } from 'core/prismic';
import React from 'react';
import { layoutComponents } from 'slices';

type Props = {
	children: JSX.Element | JSX.Element[];
	content: LayoutType;
};

const PagesLayout = ({ children, content }: Props) => {
	const [minHeight, upperRef, lowerRef] = useClearance();
	const childrenPosition = content
		? content.body.findIndex((slice) => slice.slice_type === 'children')
		: -1;
	const footerPosition = content
		? content.body.findIndex((slice) => slice.slice_type === 'footermain')
		: -1;
	const NavbarPosition = content
		? content.body.findIndex((slice) => slice.slice_type === 'navbar')
		: -1;

	return (
		<>
			<header className="sticky top-0" ref={upperRef}>
				<SliceZone
					slices={content.body.slice(NavbarPosition, childrenPosition)}
					components={layoutComponents}
					context={children}
				/>
			</header>
			<main style={{ minHeight }} className="flex-sc col">
				<SliceZone
					slices={content.body.slice(childrenPosition, childrenPosition + 1)}
					components={layoutComponents}
					context={children}
				/>
			</main>

			<footer ref={lowerRef}>
				<SliceZone
					slices={content.body.slice(childrenPosition + 1, footerPosition + 1)}
					context={children}
					components={layoutComponents}
				/>
			</footer>
		</>
	);
};

export default PagesLayout;

