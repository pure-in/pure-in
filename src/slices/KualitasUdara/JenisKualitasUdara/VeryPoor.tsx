import React from 'react';
import { BsEmojiDizzy } from 'react-icons/bs';

const VeryPoor = () => {
	return (
		<>
			<div className=" bg-red-600 text-red-900 text-5xl p-2 rounded-lg">
				<BsEmojiDizzy />
			</div>
			<span className="text-sm text-red-900 font-bold">Very Poor</span>
		</>
	);
};

export default VeryPoor;

