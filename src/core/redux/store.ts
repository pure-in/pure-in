import { configureStore } from '@reduxjs/toolkit';
import PrismicReducer, { reducerState } from './prismic';

export type selectorProps = {
	prismic: reducerState;
};

export default configureStore({
	reducer: {
		prismic: PrismicReducer,
	},
	devTools: true,
});

