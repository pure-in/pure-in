import { SliceZoneComponents } from '@prismicio/react';
import { SlicesLayout, SlicesPage } from 'core/prismic';

import Children from './Children';
import FooterMain from './FooterMain';
import Navbar from './Navbar';
import Title from './Title';

export const components: SliceZoneComponents<SlicesPage> = {
	title: Title,
};

export const layoutComponents: SliceZoneComponents<SlicesLayout, JSX.Element | JSX.Element[]> = {
	navbar: Navbar,
	footermain: FooterMain,
	children: Children,
};

