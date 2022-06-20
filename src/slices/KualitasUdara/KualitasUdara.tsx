import { openWeather } from 'core/axios';
import { subDays, format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Fair from './JenisKualitasUdara/Fair';
import Good from './JenisKualitasUdara/Good';
import Moderate from './JenisKualitasUdara/Moderate';
import Poor from './JenisKualitasUdara/Poor';
import VeryPoor from './JenisKualitasUdara/VeryPoor';

type AirPollutionType = {
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

const KualitasUdara = () => {
	const [AirPollutions, setAirPollutions] = useState<AirPollutionType[]>([]);

	useEffect(() => {
		const startDate = subDays(new Date(), 1).valueOf() / 1000;
		const endDate = new Date().valueOf() / 1000;

		openWeather
			.get('/air_pollution/history', {
				params: {
					lat: '-6.207561834386189',
					lon: '106.84737078234377',
					start: Math.floor(startDate),
					end: Math.floor(endDate),
				},
			})
			.then((res) => {
				setAirPollutions(res.data.list);
			});
	}, []);

	return (
		<section className="w-full py-10 bg-white">
			<div className="container">
				<h2 className="text-primary text-4xl font-bold text-center mb-10">
					Kualitas Udara
				</h2>
				<div className="flex items-center flex-col gap-5 w-full max-h-96 overflow-y-auto">
					{AirPollutions.map((air) => (
						<div
							className=" w-max gap-10 rounded border flex-bc px-10 py-5"
							key={air.dt}
						>
							<div>{format(air.dt * 1000, 'do LLL yyyy HH:mm a')}</div>
							<div className="flex gap-4">
								<div className="flex-cc flex-col">
									{
										{
											'0': <Good />,
											'1': <Fair />,
											'2': <Moderate />,
											'3': <Poor />,
											'4': <VeryPoor />,
										}[air.main.aqi - 1]
									}
								</div>
								<div className="w-24 h-16 bg-gray-300 rounded-md flex-cc flex-col">
									<span className="text-gray-500 text-sm">NO2</span>
									<span className="text-gray-500 text-md">
										{air.components.no2}
									</span>
								</div>
								<div className="w-24 h-16 bg-gray-300 rounded-md flex-cc flex-col">
									<span className="text-gray-500 text-sm">PM10</span>
									<span className="text-gray-500 text-md">
										{air.components.pm10}
									</span>
								</div>
								<div className="w-24 h-16 bg-gray-300 rounded-md flex-cc flex-col">
									<span className="text-gray-500 text-sm">CO</span>
									<span className="text-gray-500 text-md">
										{air.components.co}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default KualitasUdara;

