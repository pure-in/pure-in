import React from 'react';
import { BsEmojiNeutral } from 'react-icons/bs';

const Moderate = () => {
	return (
		<>
			<div className=" bg-yellow-500 text-yellow-600 text-5xl p-2 rounded-lg">
				<BsEmojiNeutral />
			</div>
			<span className="text-sm text-yellow-600 font-bold">Moderate</span>
		</>
	);
};

export default Moderate;

