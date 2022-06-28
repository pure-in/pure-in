import { PrismicImage, PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { saweria } from 'core/axios';
import React, { useEffect, useState } from 'react';
import { convertToCurrecny } from 'utils/converter';
import { HeroWithSaweriaType } from '.';

const Title = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<h2 className="text-white font-bold text-4xl leading-10 mb-6">{children}</h2>
);

const Paragraph = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<p className="text-white font-light">{children}</p>
);

const HeroWithSaweria = ({ slice }: SliceComponentProps<HeroWithSaweriaType>) => {
	const { image, title, description, saweria_url, id } = slice.primary;
	const [Donasi, setDonasi] = useState(0);

	useEffect(() => {
		saweria.get('/donations').then((res) => {
			setDonasi(res.data.recap_donation_total);
		});
	}, []);

	return (
		<section className="w-full bg-primary">
			<div className="container relative flex-col lg:flex-row flex py-10">
				<div className="mb-10 md:mb-0">
					<PrismicRichText field={title} components={{ heading1: Title }} />
					<PrismicRichText field={description} components={{ paragraph: Paragraph }} />
				</div>
				<div className=" flex items-center justify-end w-full">
					<PrismicImage className=" h-auto max-w-lg w-full" field={image} />
				</div>
				<div id={id ? id : undefined} className="bottom-10 left-0 absolute w-full px-5">
					<div className="flex-bc flex-col md:flex-row bg-white bg-opacity-50 backdrop-blur-md rounded-md px-5 lg:px-10 py-4 w-full">
						<h3>Total donasi terkumpul saat ini:</h3>
						<h2 className=" text-2xl md:text-5xl font-bold">
							Rp. {convertToCurrecny(Donasi.toString())}
						</h2>
						{saweria_url && (
							<a
								className="bg-primary rounded-md text-white font-bold py-4 px-8 block text-center"
								href={saweria_url}
								target="_blank"
								rel="noopener noreferrer"
							>
								Ayo Donasi
							</a>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroWithSaweria;

