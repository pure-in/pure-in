import React, {
	Children,
	cloneElement,
	isValidElement,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';

const MapComponent = ({
	center,
	zoom,
	children,
}: {
	center: google.maps.LatLngLiteral;
	zoom: number;
	children?: ReactNode;
	[key: string]: any;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [map, setMap] = useState<google.maps.Map | null>(null);
	useEffect(() => {
		if (ref.current)
			setMap(
				new window.google.maps.Map(ref.current, {
					center,
					zoom,
				})
			);
	}, []);

	return (
		<>
			<div ref={ref} className="w-full h-full min-h-[700px]" />
			{Children.map(children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(child, { map });
				}
			})}
		</>
	);
};

export default MapComponent;

