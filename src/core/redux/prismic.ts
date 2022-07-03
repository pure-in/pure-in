import { createSlice } from '@reduxjs/toolkit';
import { ArticleType, CustomPrismicDoc } from 'core/prismic';

export interface userType {
	country: string;
	display_name: string;
	email: string;
	href: string;
	id: string;
	images: {
		height: null;
		url: string;
		width: null;
	}[];
	product: string;
	type: string;
	uri: string;
}

export type reducerState = {
	currentArticle: CustomPrismicDoc<ArticleType> | null;
};

const initialState: reducerState = {
	currentArticle: null,
};

const inputSlice = createSlice({
	name: 'prismic',
	initialState,
	reducers: {
		addCurrentArticle: (state, action) => ({
			...state,
			currentArticle: action.payload,
		}),
	},
});

export const { addCurrentArticle } = inputSlice.actions;

export default inputSlice.reducer;

