import React from 'react';
import Fair from './JenisKualitasUdara/Fair';
import Good from './JenisKualitasUdara/Good';
import Moderate from './JenisKualitasUdara/Moderate';
import Poor from './JenisKualitasUdara/Poor';
import VeryPoor from './JenisKualitasUdara/VeryPoor';
import { format } from 'date-fns';
import { AirPollutionType } from './KualitasUdara';

type Props = {
	air: AirPollutionType;
};

const AirPollutionItem = ({ air }: Props) => (
	<div className=" w-max gap-10 rounded border flex-bc px-10 py-5">
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
				<span className="text-gray-500 text-md">{air.components.no2}</span>
			</div>
			<div className="w-24 h-16 bg-gray-300 rounded-md flex-cc flex-col">
				<span className="text-gray-500 text-sm">PM10</span>
				<span className="text-gray-500 text-md">{air.components.pm10}</span>
			</div>
			<div className="w-24 h-16 bg-gray-300 rounded-md flex-cc flex-col">
				<span className="text-gray-500 text-sm">CO</span>
				<span className="text-gray-500 text-md">{air.components.co}</span>
			</div>
		</div>
	</div>
);

export default AirPollutionItem;

