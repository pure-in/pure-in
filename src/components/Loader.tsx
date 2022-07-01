import React from 'react';

type Props = {
	className: string | undefined;
};

export const Loader = ({ className }: Props) => (
	<div className={`${className} bg-[#00CCFF]`}>
		<div className="dots-container">
			<div className="dots"></div>
			<div className="dots"></div>
			<div className="dots"></div>
			<div className="dots"></div>
			<div className="dots"></div>
		</div>
	</div>
);

