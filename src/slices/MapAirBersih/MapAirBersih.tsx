import { SliceComponentProps } from '@prismicio/react';
import React from 'react';
import { MapAirBersihType } from '.';
import Map from './Map';

const MapAirBersih = ({ slice }: SliceComponentProps<MapAirBersihType>) => {
	const { title, id } = slice.primary;

	return (
		<section className="w-full my-5">
			<div id={id ? id : undefined} className="container">
				map
				<Map datas={slice.items} />
			</div>
		</section>
	);
};

export default MapAirBersih;

