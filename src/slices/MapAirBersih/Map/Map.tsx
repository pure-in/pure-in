import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { Item } from '..';
import MapComponent from './MapComponent';
import Marker from './Marker';
import { renderToString } from 'react-dom/server';
import { isFilled } from '@prismicio/helpers';

type Props = {
	datas: Item[];
};

const Map = ({ datas }: Props) => {
	const center = { lat: -6.195509760592845, lng: 106.82573318481447 };
	const zoom = 11.4;

	const ApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
	if (!ApiKey) return <></>;

	return (
		<Wrapper apiKey={ApiKey}>
			<MapComponent center={center} zoom={zoom}>
				{datas.map(({ location, title, image, map_url }) => {
					return (
						<Marker
							key={`${location.latitude}-${location.longitude}`}
							position={{
								lat: location.latitude,
								lng: location.longitude,
							}}
						>
							{renderToString(
								<div className="flex">
									{isFilled.image(image) && (
										<img src={image.url} alt={image.alt ?? ''} />
									)}
									<div className="flex flex-col">
										{title && <h2 className="font-bold mb-3">{title}</h2>}
										{map_url && (
											<a
												className="py-2 block w-full rounded border px-2"
												href={map_url}
												target="_blank"
												rel="noopener noreferrer"
											>
												Get Direction
											</a>
										)}
									</div>
								</div>
							)}
						</Marker>
					);
				})}
			</MapComponent>
		</Wrapper>
	);
};

export default Map;

