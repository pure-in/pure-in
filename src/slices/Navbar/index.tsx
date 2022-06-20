import * as prismicT from '@prismicio/types';
import Navbar from './Navbar';
export type Primary = {
	logo: prismicT.ImageField;
};

type Item = {
	label: prismicT.KeyTextField;
	href: prismicT.KeyTextField;
};

export type NavbarType = prismicT.Slice<'navbar', Primary, Item>;
export default Navbar;

