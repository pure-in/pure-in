import { SliceComponentProps } from '@prismicio/react';
import { openWeather } from 'core/axios';
import { subDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { KualitasUdaraType } from '.';
import AirPollutionItem from './AirPollutionItem';

export type AirPollutionType = {
	dt: number;
	main: {
		aqi: number;
	};
	components: {
		co: number;
		no: number;
		no2: number;
		o3: number;
		so2: number;
		pm2_5: number;
		pm10: number;
		nh3: number;
	};
};

const KualitasUdara = ({ slice }: SliceComponentProps<KualitasUdaraType>) => {
	const [AirPollutions, setAirPollutions] = useState<AirPollutionType[]>([]);
	const { id } = slice.primary;
	useEffect(() => {
		const startDate = subDays(new Date(), 1).valueOf() / 1000;
		const endDate = new Date().valueOf() / 1000;
		const JAKARTA_COORDINATE = {
			lat: '-6.207561834386189',
			lon: '106.84737078234377',
		};
		openWeather
			.get('/air_pollution/history', {
				params: {
					lat: JAKARTA_COORDINATE.lat,
					lon: JAKARTA_COORDINATE.lon,
					start: Math.floor(startDate),
					end: Math.floor(endDate),
				},
			})
			.then((res: { data: { list: AirPollutionType[] } }) => {
				setAirPollutions(res.data.list.reverse());
			});
	}, []);

	return (
		<section className="w-full py-10 bg-white">
			<div className="container">
				<h2 className="text-primary text-4xl font-bold text-center mb-10">
					Kualitas Udara
				</h2>
				<div
					id={id ? id : undefined}
					className="flex items-center flex-col gap-5 w-full max-h-96 overflow-y-auto"
				>
					{AirPollutions.map((air) => (
						<AirPollutionItem key={air.dt} air={air} />
					))}
				</div>
			</div>
		</section>
	);
};

export default KualitasUdara;

