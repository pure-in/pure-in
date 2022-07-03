import React from 'react';
import * as prismicT from '@prismicio/types';
import { SliceComponentProps } from '@prismicio/react';

type Primary = {
    articleamount : prismicT.NumberField
};

export type ArtikelListType = prismicT.Slice<'artikellist', Primary>;

const ArtikelList = ({ slice }: SliceComponentProps<ArtikelListType>) => {
	console.log(slice);
    
	return <div>ini ArtikelList</div>;	
};

export default ArtikelList;