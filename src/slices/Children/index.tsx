import { SliceComponentProps } from '@prismicio/react';
import * as prismicT from '@prismicio/types';
import React from 'react';

export type ChildrenType = prismicT.Slice<'children'>;

const Children = ({ context }: SliceComponentProps<ChildrenType, JSX.Element | JSX.Element[]>) => {
	return <>{context}</>;
};

export default Children;

