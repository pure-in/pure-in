import { SliceComponentProps } from '@prismicio/react';
import * as prismicT from '@prismicio/types';
import React from 'react';

export type ChildrenType = prismicT.Slice<'children'>;

const Children = ({ context }: SliceComponentProps<ChildrenType>) => {
	return <>{context}</>;
};

export default Children;

