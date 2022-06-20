import { PrismicImage, SliceComponentProps } from '@prismicio/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarType } from '.';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({ slice }: SliceComponentProps<NavbarType>) => {
	const { logo } = slice.primary;
	const [OpenMobile, setOpenMobile] = useState(false);
	return (
		<nav className="w-full bg-primary z-40">
			<div className="container flex-bc py-3 z-20 relative">
				<div className=" ">
					<Link to="/">
						<PrismicImage field={logo} className=" w-auto max-h-20 h-full " />
					</Link>
				</div>
				<div>
					<div className="md:flex gap-5 hidden">
						{slice.items.map(
							(link, index) =>
								link.href && (
									<Link
										className="text-white hover:text-opacity-80 relative before:h-px before:absolute before:w-0 before:bg-white hover:before:w-full before:transition-all before:bottom-0 py-2"
										key={index}
										to={link.href}
									>
										{link.label}
									</Link>
								)
						)}
					</div>
					<div className="block md:hidden">
						<button
							className="text-white"
							onClick={() => setOpenMobile((prev) => !prev)}
						>
							{OpenMobile ? (
								<AiOutlineClose className="w-8 h-8" />
							) : (
								<AiOutlineMenu className="w-8 h-8" />
							)}
						</button>
					</div>
				</div>
			</div>
			{OpenMobile && (
				<div className=" absolute bg-primary h-screen w-screen top-0 left-0 flex-cc col">
					{slice.items.map(
						(link, index) =>
							link.href && (
								<Link
									className="text-white text-3xl hover:text-opacity-80 relative before:h-px before:absolute before:w-0 before:bg-white hover:before:w-full before:transition-all before:bottom-0 py-2"
									key={index}
									to={link.href}
								>
									{link.label}
								</Link>
							)
					)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;

