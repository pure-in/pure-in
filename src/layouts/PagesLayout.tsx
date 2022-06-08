import React from "react";

type Props = {
	children: JSX.Element | JSX.Element[];
};

const PagesLayout = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default PagesLayout;

