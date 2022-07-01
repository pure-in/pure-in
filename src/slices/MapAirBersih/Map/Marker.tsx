import React, { useEffect, useState } from 'react';

type Props = {
	position: google.maps.LatLngLiteral;
	children?: string | null | Element | Text;
};

const Marker = (options: Props) => {
	const [marker, setMarker] = useState<google.maps.Marker | null>(null);

	useEffect(() => {
		if (!marker) {
			setMarker(new window.google.maps.Marker());
		}
		return () => {
			if (marker) {
				marker.setMap(null);
			}
		};
	}, [marker]);

	useEffect(() => {
		if (marker) {
			const infoOptions: google.maps.InfoWindowOptions = {};
			if (options.children) {
				infoOptions.content = options.children;
			}
			const infowindow = new window.google.maps.InfoWindow(infoOptions);
			marker.setOptions(options);

			marker.addListener('click', () => {
				infowindow.open({
					anchor: marker,
					shouldFocus: false,
				});
			});
		}
	}, [marker, options]);

	return <></>;
};

export default Marker;

