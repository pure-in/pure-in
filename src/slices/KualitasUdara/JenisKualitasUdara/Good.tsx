import React from 'react';
import { BsEmojiSunglasses } from 'react-icons/bs';

const Good = () => {
	return (
		<>
			<div className=" bg-green-500 text-green-600 text-5xl p-2 rounded-lg">
				<BsEmojiSunglasses />
			</div>
			<span className="text-sm text-green-600 font-bold">Good</span>
		</>
	);
};

export default Good;

