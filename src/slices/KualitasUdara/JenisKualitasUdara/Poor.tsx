import React from 'react';
import { BsEmojiFrown } from 'react-icons/bs';

const Poor = () => {
	return (
		<>
			<div className=" bg-red-400 text-red-500 text-5xl p-2 rounded-lg">
				<BsEmojiFrown />
			</div>
			<span className="text-sm text-red-900 font-bold">Poor</span>
		</>
	);
};

export default Poor;

