import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FooterType } from '.';

const Title = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<h2 className="text-white font-bold text-4xl leading-10 mb-6">{children}</h2>
);

const Paragraph = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
	<p className="text-white font-light">{children}</p>
);

const Footer = ({ slice }: SliceComponentProps<FooterType>) => {
	const { title, description, copyright, email, phone } = slice.primary;
	return (
		<section className="bg-primary w-full py-10">
			<div className="container gap-10 grid md:grid-cols-4 mb-16">
				<div className=" md:col-span-2">
					<PrismicRichText field={title} components={{ heading2: Title }} />
					<PrismicRichText field={description} components={{ paragraph: Paragraph }} />
				</div>
				<div className="">
					<div>
						<h3 className="text-white font-bold text-xl mb-5">Situs</h3>
						<ul>
							{slice.items.map(
								(link, index) =>
									link.route && (
										<li className="mb-3" key={index}>
											<Link to={link.route} className="text-white">
												{link.label}
											</Link>
										</li>
									)
							)}
						</ul>
					</div>
				</div>
				<div className="">
					<div>
						<h3 className="text-white font-bold text-xl mb-5">Kontak</h3>
						<ul>
							<li className="mb-3 text-white">{email}</li>
							<li className="mb-3 text-white">{phone}</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container text-center">
				<PrismicRichText field={copyright} components={{ paragraph: Paragraph }} />
			</div>
		</section>
	);
};

export default Footer;

