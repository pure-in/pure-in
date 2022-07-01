import * as prismicT from '@prismicio/types';

type Primary = {
	title: prismicT.TitleField;
	id: prismicT.KeyTextField;
};
export type Item = {
	title: prismicT.KeyTextField;
	map_url: prismicT.KeyTextField;
	image: prismicT.ImageField;
	location: prismicT.GeoPointField;
};

export type MapAirBersihType = prismicT.Slice<'mapairbersih', Primary, Item>;

export { default } from './MapAirBersih';

