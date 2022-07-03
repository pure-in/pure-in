import React from 'react';
import { Provider } from 'react-redux';

function AppProviders({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default AppProviders;

